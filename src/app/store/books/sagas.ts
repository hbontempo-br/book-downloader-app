import { call, put, select } from 'redux-saga/effects';
import {
  GetPaginatedBookList,
  PaginatedBookList,
} from '../../services/BookDownloader';

import { filterSucceeded, filterFailed } from './actions';
import { BookData, BooksPagination, BooksState } from './types';

export function* filterBooks() {
  try {
    console.log('Saga - filterBooks');
    const state: BooksState = yield select(state => state.booksState); // This is not safe, what select returns? Not sure...
    console.log('Saga - filterBooks - state', state);
    const rawResponse: PaginatedBookList = yield call(
      GetPaginatedBookList,
      state.filter.name,
      state.filter.status,
      state.pagination.page,
      state.pagination.pageSize,
      state.filter.orderBy,
      state.filter.orderDirection,
    );
    const totalCount = rawResponse.pagination.totalRows;
    const pagination: BooksPagination = {
      page: rawResponse.pagination.currentPage,
      pageSize: rawResponse.pagination.rowsPerPage,
    };
    const books: BookData[] = rawResponse.data.map(responseBook => {
      return {
        name: responseBook.name,
        mask: responseBook.mask,
        status: responseBook.status,
        bookKey: responseBook.bookKey,
        createdAt: '',
      };
    });
    yield put(filterSucceeded(books, pagination, totalCount));
  } catch (err) {
    yield put(filterFailed());
  }
}
