import React from 'react';

export interface BookListContextProps {
  children: React.ReactNode;
}

export interface BookListContextData {
  books: SingleBookData[];
  filter: BookListContextFilter;
  totalCount: number;
}

export interface SingleBookData {
  name: string;
  mask: string;
  status: string;
  bookKey: string;
  createdAt: string;
}

export interface BookListContextFilter {
  name?: string;
  status?: string;
  orderBy?: string;
  orderDirection?: string;
  page: number;
  pageSize: number;
}

export type BookListContextAction =
  | { type: 'REFRESH' }
  | { type: 'CHANGE_FILTER'; filter: BookListContextFilter };
