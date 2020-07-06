import { ApplicationState } from './rootTypes';
import { BooksState } from './books/types';

export const selectBookState = (appState: ApplicationState): BooksState => appState.booksState;
