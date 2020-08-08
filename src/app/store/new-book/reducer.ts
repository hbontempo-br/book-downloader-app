import { Reducer } from 'redux';
import { toast } from 'react-toastify';
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
      toast.success('Download Started');
      return {
        pendingBooks: [...state.pendingBooks, action.payload.bookKey],
        loading: false,
        error: false,
      };
    case NewBookActionTypes.NEW_BOOK_REQUEST_FAILED:
      toast.warn('Invalid Download');
      return {
        ...state,
        loading: false,
        error: true,
      };
    case NewBookActionTypes.NEW_BOOK_DOWNLOAD_FINISHED:
      toast.success('Download Finished');
      return {
        ...state,
        pendingBooks: state.pendingBooks.filter(
          (pendingBook) => pendingBook !== action.payload.bookKey,
        ),
      };
    case NewBookActionTypes.NEW_BOOK_DOWNLOAD_FAILED:
      toast.error('Download Failed');
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
