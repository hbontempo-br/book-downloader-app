import { all, takeLatest } from 'redux-saga/effects';

import { BooksActionTypes } from './books';
import { filterBooks } from './books';

export default function* rootSaga() {
  return yield all([takeLatest(BooksActionTypes.FILTER_REQUEST, filterBooks)]);
}
