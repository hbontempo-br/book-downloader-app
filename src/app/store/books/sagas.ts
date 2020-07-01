import { call, put, select } from 'redux-saga/effects';
import {
  GetPaginatedBookList,
  PaginatedBookList,
} from '../../services/book-downloader';

import { filterSucceeded, filterFailed } from './actions';
import { BookData, BooksPagination, BooksState } from './types';
import { ApplicationState } from '../rootTypes';

export function* filterBooks() { // eslint-disable-line
  try {
    const booksState: BooksState = yield select(
      (state: ApplicationState) => state.booksState,
    ); // This is not safe, what select returns? Not sure...
    const rawResponse: PaginatedBookList = yield call(
      GetPaginatedBookList,
      booksState.filter.name,
      booksState.filter.status,
      booksState.pagination.page,
      booksState.pagination.pageSize,
      booksState.filter.orderBy,
      booksState.filter.orderDirection,
    );
    const totalCount = rawResponse.pagination.totalRows;
    const pagination: BooksPagination = {
      page: rawResponse.pagination.currentPage,
      pageSize: rawResponse.pagination.rowsPerPage,
    };
    const books: BookData[] = rawResponse.data.map((responseBook) => ({
      name: responseBook.name,
      mask: responseBook.mask,
      status: responseBook.status,
      bookKey: responseBook.bookKey,
      createdAt: '',
    }));
    yield put(filterSucceeded(books, pagination, totalCount));
  } catch (err) {
    yield put(filterFailed());
  }
}
