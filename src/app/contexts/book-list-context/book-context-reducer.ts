import {
  BookListContextAction,
  BookListContextData,
  BookListContextFilter,
  SingleBookData,
} from './book-list-context-types';
import { GetPaginatedBookList } from '../../services/BookDownloader';

const searchBooks = (
  filter: BookListContextFilter,
): Promise<BookListContextData> => {
  return GetPaginatedBookList(
    filter.name,
    filter.status,
    filter.page,
    filter.pageSize,
    filter.orderBy,
    filter.orderDirection,
  ).then(result => {
    const books: SingleBookData[] = result.data.map<SingleBookData>(
      (bookResponse): SingleBookData => ({
        bookKey: bookResponse.bookKey,
        name: bookResponse.name,
        status: bookResponse.status,
        mask: bookResponse.mask,
        createdAt: 'placeholder',
      }),
    );
    const response: BookListContextData = {
      books: books,
      filter: filter,
      totalCount: result.pagination.totalRows,
    };
    return response;
  });
};

export const BookListReducer = (
  bookListContext: BookListContextData,
  bookListContextAction: BookListContextAction,
): Promise<BookListContextData> => {
  switch (bookListContextAction.type) {
    case 'CHANGE_FILTER':
      return searchBooks(bookListContextAction.filter);
    case 'REFRESH':
      return searchBooks(bookListContext.filter);
    default:
      return new Promise<BookListContextData>((resolve, reject) =>
        resolve(bookListContext),
      );
  }
};
