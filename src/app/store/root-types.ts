import type { BookListState } from './book-list';
import type { NewBookState } from './new-book';

export interface ApplicationState {
  bookListState: BookListState;
  newBookState: NewBookState
}
