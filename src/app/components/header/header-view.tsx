import React, { memo } from 'react';
import { headerStyles } from './header-style';
import { Logo } from '../logo/loadable';
import { NewBookForm } from '../new-book-form';

export const Header: React.FunctionComponent = memo(
  () => {
    const classes = headerStyles();
    return (
      <div className={classes.root}>
        <div className={classes.logo}>
          <Logo radius={135} />
        </div>
        <div className={classes.form}>
          <NewBookForm />
        </div>
      </div>
    );
  },
);
