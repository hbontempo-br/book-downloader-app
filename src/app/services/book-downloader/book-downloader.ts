import axios from 'axios';
import applyCaseMiddleware from 'axios-case-converter';

import { Book, PaginatedBookList, DownloadLink } from './types';

const bookDownloaderInstance = applyCaseMiddleware(
  axios.create({
    // TODO: set book-downloader-api URL dynamically (ex: docker env var)
    baseURL: 'http://192.168.0.168:5000/',
    // TODO: set book-downloader-api timeout dynamically (ex: docker env var)
    timeout: 1000,
  }),
);

// TODO: Put a catch statement in getBook
export const getBook = (bookKey: string): Promise<Book> => bookDownloaderInstance
  .request<Book>({
    method: 'GET',
    url: `/book/${bookKey}`,
  })
  .then((result) => result.data);

// TODO: Put a catch statement in getPaginatedBookList
// TODO: Implement Order by on getPaginatedBookList
export const getPaginatedBookList = (
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

// TODO: Put a catch statement in getBookURL
export const getBookURL = (
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

// TODO: Put a catch statement in createBook
export const createBook = (name: string, mask: string): Promise<Book> => bookDownloaderInstance
  .request<Book>({
    method: 'POST',
    url: '/book',
    data: {
      name,
      mask,
    },
  })
  .then((result) => result.data);
