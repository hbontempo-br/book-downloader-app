import { action } from 'typesafe-actions';
import {
  BookData,
  BooksActionTypes,
  BooksFilter,
  BooksPagination,
} from './types';

export const filterRequest = (
  filter: BooksFilter,
  pagination: BooksPagination,
) => action(BooksActionTypes.FILTER_REQUEST, { filter, pagination });

export const filterSucceeded = (
  books: BookData[],
  pagination: BooksPagination,
  totalCount: number,
) =>
  action(BooksActionTypes.FILTER_SUCCEEDED, { books, pagination, totalCount });

export const filterFailed = () => action(BooksActionTypes.FILTER_FAILED);
