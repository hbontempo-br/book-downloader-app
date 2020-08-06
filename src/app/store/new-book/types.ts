export enum NewBookActionTypes {
  NEW_BOOK_REQUEST = '@newBook/NEW_BOOK_REQUEST',
  NEW_BOOK_REQUEST_SUCCEEDED = '@newBook/NEW_BOOK_REQUEST_SUCCEEDED',
  NEW_BOOK_REQUEST_FAILED = '@newBook/NEW_BOOK_REQUEST_FAILED',
  NEW_BOOK_DOWNLOAD_FINISHED = '@new-book/NEW_BOOK_DOWNLOAD_FINISHED',
  NEW_BOOK_DOWNLOAD_FAILED = '@new-book/NEW_BOOK_DOWNLOAD_FAILED',
}

export type NewBookRequestAction = {
  type: NewBookActionTypes.NEW_BOOK_REQUEST,
  payload: {
    name: string;
    mask: string;
  }
}

export type NewBookRequestSucceedAction = {
  type: NewBookActionTypes.NEW_BOOK_REQUEST_SUCCEEDED;
  payload: {
    bookKey: string;
  };
}

export type NewBookRequestFailedAction = {
  type: NewBookActionTypes.NEW_BOOK_REQUEST_FAILED;
}

export type NewBookDownloadSucceedAction = {
  type: NewBookActionTypes.NEW_BOOK_DOWNLOAD_FINISHED;
  payload: {
    bookKey: string;
  };
}

export type NewBookDownloadFailedAction = {
  type: NewBookActionTypes.NEW_BOOK_DOWNLOAD_FAILED;
  payload: {
    bookKey: string;
  };
}

export type NewBookAction =
  NewBookRequestAction
  | NewBookRequestSucceedAction
  | NewBookRequestFailedAction
  | NewBookDownloadSucceedAction
  | NewBookDownloadFailedAction;

// State type
export interface NewBookState {
  readonly pendingBooks: string[];
  readonly loading: boolean;
  readonly error: boolean;
}
