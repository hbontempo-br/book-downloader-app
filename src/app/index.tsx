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
            titleTemplate="%s - React Boilerplate"
            defaultTitle="React Boilerplate"
          >
            <meta name="description" content="A React Boilerplate application" />
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
