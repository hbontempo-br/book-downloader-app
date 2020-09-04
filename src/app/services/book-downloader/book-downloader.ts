import axios, { AxiosError } from 'axios';
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

export const getBook = (bookKey: string): Promise<Book> => bookDownloaderInstance
  .request<Book>({
    method: 'GET',
    url: `/book/${bookKey}`,
  })
  .then((result) => result.data)
  .catch((err: AxiosError) => {
    // TODO: Create specific error classes to describe errors better
    switch (err.response?.status) {
      case 400:
        throw err;
      case 404:
        throw err;
      case 500:
        throw err;
      case 502:
        throw err;
      default:
        throw err;
    }
  });

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
  .then((result) => result.data)
  .catch((err: AxiosError) => {
    switch (err.response?.status) {
      // TODO: Create specific error classes to describe errors better
      case 400:
        throw err;
      case 500:
        throw err;
      case 502:
        throw err;
      default:
        throw err;
    }
  });

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
  .then((result) => result.data.downloadLink)
  .catch((err: AxiosError) => {
    // TODO: Create specific error classes to describe errors better
    switch (err.response?.status) {
      case 400:
        throw err;
      case 404:
        throw err;
      case 500:
        throw err;
      case 502:
        throw err;
      default:
        throw err;
    }
  });

export const createBook = (name: string, mask: string): Promise<Book> => bookDownloaderInstance
  .request<Book>({
    method: 'POST',
    url: '/book',
    data: {
      name,
      mask,
    },
  })
  .then((result) => result.data)
  .catch((err: AxiosError) => {
    // TODO: Create specific error classes to describe errors better
    switch (err.response?.status) {
      case 400:
        throw err;
      case 500:
        throw err;
      case 502:
        throw err;
      default:
        throw err;
    }
  });
