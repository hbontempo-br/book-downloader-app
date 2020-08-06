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

export const newBookDownloadSucceed = (
  bookKey: string,
): NewBookAction => action(NewBookActionTypes.NEW_BOOK_DOWNLOAD_FINISHED, { bookKey });

export const newBookDownloadFailed = (
  bookKey: string,
): NewBookAction => action(NewBookActionTypes.NEW_BOOK_DOWNLOAD_FINISHED, { bookKey });
