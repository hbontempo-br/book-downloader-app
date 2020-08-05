import { all, takeLatest, takeEvery } from 'redux-saga/effects';
import { BookListActionTypes, filterBooks } from './book-list';
import { NewBookActionTypes, newBook } from './new-book';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types,@typescript-eslint/explicit-function-return-type
export default function* rootSaga() {
  return yield all([
    takeLatest(BookListActionTypes.FILTER_REQUEST, filterBooks),
    takeEvery(NewBookActionTypes.NEW_BOOK_REQUEST, newBook),
  ]);
}
