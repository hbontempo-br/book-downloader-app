import axios from 'axios';
import applyCaseMiddleware from 'axios-case-converter';

import { Book, PaginatedBookList, DownloadLink } from './types';

const bookDownloaderInstance = applyCaseMiddleware(
  axios.create({
    baseURL: 'http://192.168.0.168:5000/',
    timeout: 1000,
  }),
);

// TODO: Put a catch statement in all actions

export const getBook = (bookKey: string): Promise<Book> => bookDownloaderInstance
  .request<Book>({
    method: 'GET',
    url: `/book/${bookKey}`,
  })
  .then((result) => result.data);

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
