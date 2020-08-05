import { action } from 'typesafe-actions';
import {
  BookData, BookListAction, BookListActionTypes, BooksFilter, BooksPagination,
} from './types';

export const filterRequest = (
  filter: BooksFilter,
  pagination: BooksPagination,
): BookListAction => action(BookListActionTypes.FILTER_REQUEST, { filter, pagination });

export const filterSucceeded = (
  books: BookData[],
  pagination: BooksPagination,
  totalCount: number,
): BookListAction => action(
  BookListActionTypes.FILTER_SUCCEEDED,
  { books, pagination, totalCount },
);

export const filterFailed = (): BookListAction => action(BookListActionTypes.FILTER_FAILED);
