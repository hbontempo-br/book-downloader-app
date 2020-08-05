import { Reducer } from 'redux';
import { BookListAction, BookListActionTypes, BookListState } from './types';

const INITIAL_STATE: BookListState = {
  books: [],
  filter: {},
  pagination: {
    page: 1,
    pageSize: 10,
  },
  totalCount: 0,
  error: false,
  loading: false,
};

export const bookListReducer: Reducer<BookListState> = (
  state: BookListState = INITIAL_STATE,
  action: BookListAction,
): BookListState => {
  switch (action.type) {
    case BookListActionTypes.FILTER_REQUEST:
      return {
        ...state,
        filter: action.payload.filter,
        pagination: action.payload.pagination,
        loading: true,
      };
    case BookListActionTypes.FILTER_SUCCEEDED:
      return {
        ...state,
        loading: false,
        error: false,
        books: action.payload.books,
        pagination: action.payload.pagination,
        totalCount: action.payload.totalCount,
      };
    case BookListActionTypes.FILTER_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
        books: [],
      };
    default:
      return state;
  }
};
