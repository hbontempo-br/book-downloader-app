import axios from 'axios';
import applyCaseMiddleware from 'axios-case-converter';

interface Book {
  bookKey: string;
  name: string;
  mask: string;
  status: string;
}

interface Pagination {
  currentPage: number;
  nextPage?: number;
  previousPage?: number;
  maxPage: number;
  rowsPerPage: number;
  totalRows: number;
}

export interface PaginatedBookList {
  data: Book[];
  pagination: Pagination;
}

interface DownloadLink {
  downloadLink: string;
}

const bookDownloaderInstance = applyCaseMiddleware(
  axios.create({
    baseURL: 'http://localhost:5000/',
    timeout: 1000,
  }),
);

export const GetBook = (bookKey: string): Promise<Book> => {
  return bookDownloaderInstance
    .request<Book>({
      method: 'GET',
      url: '/book/' + bookKey,
    })
    .then(result => {
      return result.data;
    });
};

export const GetPaginatedBookList = (
  name?: string,
  status?: string,
  page?: number,
  pageSize?: number,
  orderBy?: string,
  orderDirection?: string,
): Promise<PaginatedBookList> => {
  console.log(
    'GetPaginatedBookList',
    name,
    status,
    page,
    pageSize,
    orderBy,
    orderDirection,
  );
  return bookDownloaderInstance
    .request<PaginatedBookList>({
      method: 'GET',
      url: '/book',
      params: {
        name: name,
        status: status,
        page: page,
        pageSize: pageSize,
      },
    })
    .then(result => {
      return result.data;
    });
};

export const GetBookURL = (
  bookKey: string,
  expiry?: number,
): Promise<string> => {
  return bookDownloaderInstance
    .request<DownloadLink>({
      method: 'GET',
      url: '/book/' + bookKey + '/download_link',
      params: {
        expiry: expiry,
      },
    })
    .then(result => {
      return result.data.downloadLink;
    });
};
