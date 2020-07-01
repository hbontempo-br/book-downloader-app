import React, { memo } from 'react';
import {
  green200,
  green900,
  redA100,
  redA700,
  yellow100,
  yellow700,
} from 'material-ui/styles/colors';
import { statusTagStyles } from './status-tag-style';
import { StatusTagProps } from './status-tag-types';

export const GenericStatusTag: React.FunctionComponent<StatusTagProps> = memo(
  (props: StatusTagProps) => {
    const classes = statusTagStyles(props);

    return (
      <div className={classes.root}>
        <div className={classes.dot} />
        <div className={classes.text}>{props.status}</div>
      </div>
    );
  },
);

export const FinishedTag: React.FunctionComponent = memo(() => (
  <GenericStatusTag
    status="Finished"
    color={green900}
    backgroundColor={green200}
  />
));

export const PendingTag: React.FunctionComponent = memo(() => (
  <GenericStatusTag
    status="Pending"
    color={yellow700}
    backgroundColor={yellow100}
  />
));

export const ErrorTag: React.FunctionComponent = memo(() => (
  <GenericStatusTag status="Error" color={redA700} backgroundColor={redA100} />
));
