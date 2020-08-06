import { Reducer } from 'redux';
import { NewBookAction, NewBookActionTypes, NewBookState } from './types';

const INITIAL_STATE: NewBookState = {
  pendingBooks: [],
  error: false,
  loading: false,
};

export const newBookReducer: Reducer<NewBookState> = (
  state: NewBookState = INITIAL_STATE,
  action: NewBookAction,
): NewBookState => {
  switch (action.type) {
    case NewBookActionTypes.NEW_BOOK_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NewBookActionTypes.NEW_BOOK_REQUEST_SUCCEEDED:
      return {
        pendingBooks: [...state.pendingBooks, action.payload.bookKey],
        loading: false,
        error: false,
      };
    case NewBookActionTypes.NEW_BOOK_REQUEST_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case NewBookActionTypes.NEW_BOOK_DOWNLOAD_FINISHED:
      return {
        ...state,
        pendingBooks: state.pendingBooks.filter(
          (pendingBook) => pendingBook !== action.payload.bookKey,
        ),
      };
    case NewBookActionTypes.NEW_BOOK_DOWNLOAD_FAILED:
      return {
        ...state,
        pendingBooks: state.pendingBooks.filter(
          (pendingBook) => pendingBook !== action.payload.bookKey,
        ),
      };
    default:
      return state;
  }
};
