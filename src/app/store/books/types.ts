// Actions types
export enum BooksActionTypes {
  FILTER_REQUEST = '@books/FILTER_REQUEST',
  FILTER_SUCCEEDED = '@books/FILTER_SUCCEED',
  FILTER_FAILED = '@books/FILTER_FAILED',
}

export type BooksAction =
  | {
      type: BooksActionTypes.FILTER_REQUEST;
      payload: {
        filter: BooksFilter;
        pagination: BooksPagination;
      };
    }
  | {
      type: BooksActionTypes.FILTER_SUCCEEDED;
      payload: {
        books: BookData[];
        pagination: BooksPagination;
        totalCount: number;
      };
    }
  | { type: BooksActionTypes.FILTER_FAILED };

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
