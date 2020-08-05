// Actions types
export enum BookListActionTypes {
  FILTER_REQUEST = '@bookList/FILTER_REQUEST',
  FILTER_SUCCEEDED = '@bookList/FILTER_SUCCEED',
  FILTER_FAILED = '@bookList/FILTER_FAILED',
}

export type FilterRequestAction = {
  type: BookListActionTypes.FILTER_REQUEST;
  payload: {
    filter: BooksFilter;
    pagination: BooksPagination;
  };
}

export type FilterRequestSucceedAction = {
  type: BookListActionTypes.FILTER_SUCCEEDED;
  payload: {
    books: BookData[];
    pagination: BooksPagination;
    totalCount: number;
  };
}

export type FilterRequestFailedAction = { type: BookListActionTypes.FILTER_FAILED }

export type BookListAction =
  | FilterRequestAction
  | FilterRequestSucceedAction
  | FilterRequestFailedAction;

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
export interface BookListState {
  readonly books: BookData[];
  readonly filter: BooksFilter;
  readonly pagination: BooksPagination;
  readonly totalCount: number;
  readonly loading: boolean;
  readonly error: boolean;
}
