import {
  call,
  put,
  delay,
} from 'redux-saga/effects';
import {
  createBook,
  getBook,
  Book,
} from '../../services/book-downloader';

import {
  newBookRequestSucceed, newBookRequestFailed, newBookDownloadSucceed, newBookDownloadFailed,
} from './actions';
import {
  NewBookRequestAction,
  NewBookRequestSucceedAction,
} from './types';
// import { ApplicationState } from '../rootTypes';

export function* newBook(action: NewBookRequestAction) { // eslint-disable-line
  try {
    const rawResponse: Book = yield createBook(action.payload.name, action.payload.mask);
    yield put(newBookRequestSucceed(rawResponse.bookKey));
  } catch (err) {
    yield put(newBookRequestFailed());
  }
}

export function* monitorBook( // eslint-disable-line
  action: NewBookRequestSucceedAction, retry?: number,
  timeout?: number,
) {
  const { bookKey } = action.payload;
  const retryCount = retry || 5;
  const retryTimeout = timeout || 600000;
  const pollingInterval = 15000;

  const startTime = performance.now();
  function elapsedTime(): number {
    const now = performance.now();
    return now - startTime;
  }
  while ((retryCount > 0) && (retryTimeout > 0)) {
    try {
      yield delay(pollingInterval);
      const rawResponse: Book = yield getBook(bookKey);
      switch (rawResponse.status) {
        case 'pending':
          console.log('Monitoring: book status = pending');
          break;
        case 'finished':
          console.log('Monitoring: book status = finished'); // Should call success redux
          yield put(newBookDownloadSucceed(bookKey));
          return undefined;
        case 'error':
          console.log('Monitoring: book status = error'); // Should call error redux
          yield put(newBookDownloadFailed(bookKey));
          return undefined;
        default:
          console.log(`Unknown book status = ${rawResponse.status}`); // Should call error redux
          return undefined;
      }
      if (rawResponse.status === 'pending' && (retryTimeout - elapsedTime() < 0)) {
        console.log('Monitoring timeout'); // Should call error redux
        return undefined;
      }
    } catch (err) {
      yield monitorBook(action, retryCount - 1, retryTimeout - elapsedTime());
    }
  }
}
