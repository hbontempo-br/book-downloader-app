import { all, takeLatest } from 'redux-saga/effects';

import { BooksActionTypes, filterBooks } from './books';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types,@typescript-eslint/explicit-function-return-type
export default function* rootSaga() {
  return yield all([takeLatest(BooksActionTypes.FILTER_REQUEST, filterBooks)]);
}
