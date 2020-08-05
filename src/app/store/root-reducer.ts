import { combineReducers } from 'redux';

import { bookListReducer } from './book-list';
import { newBookReducer } from './new-book';

export default combineReducers({
  bookListState: bookListReducer,
  newBookState: newBookReducer,
});
