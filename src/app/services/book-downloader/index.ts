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
    baseURL: 'http://192.168.0.168:5000/',
    timeout: 1000,
  }),
);

export const GetBook = (bookKey: string): Promise<Book> => bookDownloaderInstance
  .request<Book>({
    method: 'GET',
    url: `/book/${bookKey}`,
  })
  .then((result) => result.data);

export const GetPaginatedBookList = (
  name?: string,
  status?: string,
  page?: number,
  pageSize?: number,
  orderBy?: string,
  orderDirection?: string,
): Promise<PaginatedBookList> => bookDownloaderInstance
  .request<PaginatedBookList>({
    method: 'GET',
    url: '/book',
    params: {
      name,
      status,
      page,
      pageSize,
    },
  })
  .then((result) => result.data);

export const GetBookURL = (
  bookKey: string,
  expiry?: number,
): Promise<string> => bookDownloaderInstance
  .request<DownloadLink>({
    method: 'GET',
    url: `/book/${bookKey}/download_link`,
    params: {
      expiry,
    },
  })
  .then((result) => result.data.downloadLink);
