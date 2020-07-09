import React, { memo } from 'react';
import logo from './logo.svg';
import { logoStyles } from './logo-style';
import { LogoProps } from './logo-types';

export const Logo: React.FunctionComponent<LogoProps> = memo(
  (props: LogoProps) => {
    const classes = logoStyles(props);
    return (
      <img src={logo} alt="logo" className={classes.root} />
    );
  },
);
