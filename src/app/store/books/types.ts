// Actions types
export enum BooksActionTypes {
  FILTER_REQUEST = '@books/FILTER_REQUEST',
  FILTER_SUCCEEDED = '@books/FILTER_SUCCEED',
  FILTER_FAILED = '@books/FILTER_FAILED',
  NEW_BOOK_REQUEST = '@books/NEW_BOOK_REQUEST',
  NEW_BOOK_SUCCEEDED = '@books/NEW_BOOK_SUCCEEDED',
  NEW_BOOK_FAILED = '@books/NEW_BOOK_FAILED',
}

export type FilterRequestAction = {
  type: BooksActionTypes.FILTER_REQUEST;
  payload: {
    filter: BooksFilter;
    pagination: BooksPagination;
  };
}

export type FilterRequestSucceedAction = {
  type: BooksActionTypes.FILTER_SUCCEEDED;
  payload: {
    books: BookData[];
    pagination: BooksPagination;
    totalCount: number;
  };
}

export type FilterRequestFailedAction = { type: BooksActionTypes.FILTER_FAILED }

export type NewBookRequestAction = {
  type: BooksActionTypes.NEW_BOOK_REQUEST,
  payload: {
    name: string;
    mask: string;
  }
}

export type NewBookRequestSucceedAction = {
  type: BooksActionTypes.NEW_BOOK_SUCCEEDED;
  payload: {
    book: BookData;
  };
}

export type NewBookRequestFailedAction = { type: BooksActionTypes.NEW_BOOK_FAILED }

export type BooksAction =
  | FilterRequestAction
  | FilterRequestSucceedAction
  | FilterRequestFailedAction
  | NewBookRequestAction
  | NewBookRequestSucceedAction
  | NewBookRequestFailedAction;

// Data types
export interface BookData {
  name: string;
  mask: string;
  status: string;
  bookKey: string;
  createdAt: string;
}

export interface BooksPagination {
  page: number;
  pageSize: number;
}

export interface BooksFilter {
  name?: string;
  status?: string;
  orderBy?: string;
  orderDirection?: string;
}

// State type
export interface BooksState {
  readonly books: BookData[];
  readonly filter: BooksFilter;
  readonly pagination: BooksPagination;
  readonly totalCount: number;
  readonly loading: boolean;
  readonly error: boolean;
}
