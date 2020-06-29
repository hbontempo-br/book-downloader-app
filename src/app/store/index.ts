import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { BooksState } from './books/types';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

export interface ApplicationState {
  booksState: BooksState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
); // TODO: Add type for Store for safety

sagaMiddleware.run(rootSaga);

export default store;
