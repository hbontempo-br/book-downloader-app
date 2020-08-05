import { action } from 'typesafe-actions';
import {
  NewBookAction, NewBookActionTypes,
} from './types';

export const newBookRequest = (
  name: string,
  mask: string,
): NewBookAction => action(NewBookActionTypes.NEW_BOOK_REQUEST, { name, mask });

export const newBookRequestSucceed = (
  bookKey: string,
): NewBookAction => action(NewBookActionTypes.NEW_BOOK_REQUEST_SUCCEEDED, { bookKey });

export const newBookRequestFailed = (): NewBookAction => action(
  NewBookActionTypes.NEW_BOOK_REQUEST_FAILED,
);
