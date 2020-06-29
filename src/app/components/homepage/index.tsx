import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BookTable } from '../book-table/loadable';
import { BookListContextProvider } from 'app/contexts/book-list-context';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <BookListContextProvider>
        <BookTable />
      </BookListContextProvider>
    </>
  );
}
