import { action } from 'typesafe-actions';
import {
  BookData,
  BooksAction,
  BooksActionTypes,
  BooksFilter,
  BooksPagination,
} from './types';

export const filterRequest = (
  filter: BooksFilter,
  pagination: BooksPagination,
): BooksAction => action(BooksActionTypes.FILTER_REQUEST, { filter, pagination });

export const filterSucceeded = (
  books: BookData[],
  pagination: BooksPagination,
  totalCount: number,
): BooksAction => action(BooksActionTypes.FILTER_SUCCEEDED, { books, pagination, totalCount });

export const filterFailed = (): BooksAction => action(BooksActionTypes.FILTER_FAILED);