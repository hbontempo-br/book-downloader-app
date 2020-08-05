import { ApplicationState } from './root-types';
import type { BookListState } from './book-list';
import type { NewBookState } from './new-book';

export const selectBookListState = (
  appState: ApplicationState,
): BookListState => appState.bookListState;

export const selectNewBookState = (
  appState: ApplicationState,
): NewBookState => appState.newBookState;
