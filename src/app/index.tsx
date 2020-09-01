/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { Provider } from 'react-redux';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { ToastContainer } from 'react-toastify';
import { HomePage } from './components/homepage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';

import store from './store';

// TODO: create a component encapsulating the toast for better organization and easier
//       library change
import 'react-toastify/dist/ReactToastify.css';

const slytes = makeStyles((theme: Theme) => createStyles({
  root: {
    backgroundColor: '#FFFFE0',
  },
}));

export function App(): JSX.Element {
  const classes = slytes();
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className={classes.root}>
          <Helmet
            titleTemplate="%s - Book Downloader"
            defaultTitle="Book Downloader App"
          >
            <meta name="description" content="Website for downloading a bunch of images in sequential links and creating a pdf. (Mostly for learning reasons)" />
          </Helmet>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route component={NotFoundPage} />
          </Switch>
          <GlobalStyle />
        </div>
        <ToastContainer autoClose={2000} />
      </BrowserRouter>
    </Provider>
  );
}
