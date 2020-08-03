import { call, put } from 'redux-saga/effects';
import {
  getPaginatedBookList,
  PaginatedBookList,
  createBook,
  Book,
} from '../../services/book-downloader';

import {
  filterSucceeded, filterFailed, newBookRequestSucceed, newBookRequestFailed,
} from './actions';
import {
  BookData, BooksPagination, FilterRequestAction, NewBookRequestAction,
} from './types';
// import { ApplicationState } from '../rootTypes';

export function* filterBooks(action: FilterRequestAction) { // eslint-disable-line
  try {
    const rawResponse: PaginatedBookList = yield call(
      getPaginatedBookList,
      action.payload.filter.name,
      action.payload.filter.status,
      action.payload.pagination.page,
      action.payload.pagination.pageSize,
      action.payload.filter.orderBy,
      action.payload.filter.orderDirection,
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

export function* newBook(action: NewBookRequestAction) { // eslint-disable-line
  try {
    const rawResponse: Book = yield createBook(action.payload.name, action.payload.mask);
    const book: BookData = {
      name: rawResponse.name,
      mask: rawResponse.mask,
      status: rawResponse.status,
      bookKey: rawResponse.bookKey,
      createdAt: '',
    };
    yield put(newBookRequestSucceed(book));
  } catch (err) {
    yield put(newBookRequestFailed());
  }
}
