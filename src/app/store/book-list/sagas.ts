import { call, put, select } from 'redux-saga/effects';
import {
  getPaginatedBookList,
  PaginatedBookList,
} from '../../services/book-downloader';

import {
  filterSucceeded, filterFailed,
} from './actions';
import {
  BookData, BooksPagination,
} from './types';
import { selectBookListState } from '../root-selectors';

export function* updateBooks() { // eslint-disable-line
  try {
    const bookListState = yield select(selectBookListState);
    const rawResponse: PaginatedBookList = yield call(
      getPaginatedBookList,
      bookListState.name,
      bookListState.filter.status,
      bookListState.pagination.page,
      bookListState.pagination.pageSize,
      bookListState.filter.orderBy,
      bookListState.filter.orderDirection,
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
