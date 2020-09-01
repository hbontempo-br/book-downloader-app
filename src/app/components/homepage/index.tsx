import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BookTable } from '../book-table/loadable';
import { Header } from '../header/header-view';
import { homepageStyles } from './homepage-style';

export function HomePage(): JSX.Element {
  const classes = homepageStyles();
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Website for downloading a bunch of images in sequential links and creating a pdf. (Mostly for learning reasons)" />
      </Helmet>
      <div className={classes.root}>
        <Header />
        <div className={classes.table}>
          <BookTable />
        </div>
      </div>
    </>
  );
}
