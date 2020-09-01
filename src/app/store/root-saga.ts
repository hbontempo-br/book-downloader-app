import { all, takeEvery, takeLatest } from 'redux-saga/effects';
import { BookListActionTypes, updateBooks } from './book-list';
import { monitorBook, newBook, NewBookActionTypes } from './new-book';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types,@typescript-eslint/explicit-function-return-type
export default function* rootSaga() {
  return yield all([
    takeLatest([
      BookListActionTypes.FILTER_REQUEST,
      NewBookActionTypes.NEW_BOOK_REQUEST_SUCCEEDED,
      NewBookActionTypes.NEW_BOOK_DOWNLOAD_FINISHED,
      NewBookActionTypes.NEW_BOOK_DOWNLOAD_FAILED,
    ], updateBooks),
    takeEvery(NewBookActionTypes.NEW_BOOK_REQUEST, newBook),
    takeEvery(NewBookActionTypes.NEW_BOOK_REQUEST_SUCCEEDED, monitorBook),
  ]);
}
