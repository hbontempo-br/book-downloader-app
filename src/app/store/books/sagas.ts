import { call, put } from 'redux-saga/effects';
import {
  GetPaginatedBookList,
  PaginatedBookList,
} from '../../services/book-downloader';

import { filterSucceeded, filterFailed } from './actions';
import { BookData, BooksPagination, FilterRequestAction } from './types';
// import { ApplicationState } from '../rootTypes';

export function* filterBooks(action: FilterRequestAction) { // eslint-disable-line
  try {
    const rawResponse: PaginatedBookList = yield call(
      GetPaginatedBookList,
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
