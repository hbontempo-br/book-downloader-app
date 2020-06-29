import { Reducer } from 'redux';
import { BooksState, BooksActionTypes, BooksAction } from './types';

const INITIAL_STATE: BooksState = {
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

export const booksReducer: Reducer<BooksState> = (
  state: BooksState = INITIAL_STATE,
  action: BooksAction,
): BooksState => {
  switch (action.type) {
    case BooksActionTypes.FILTER_REQUEST:
      console.log('FilterAction', action);
      console.log(
        'FilterAction - filter/pagination',
        action.payload.filter,
        action.payload.pagination,
      );
      return {
        ...state,
        filter: action.payload.filter,
        pagination: action.payload.pagination,
        loading: true,
      };
    case BooksActionTypes.FILTER_SUCCEEDED:
      return {
        ...state,
        loading: false,
        error: false,
        books: action.payload.books,
        pagination: action.payload.pagination,
        totalCount: action.payload.totalCount,
      };
    case BooksActionTypes.FILTER_FAILED:
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

export default booksReducer;
