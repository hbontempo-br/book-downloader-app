import React, { memo } from 'react';
import { IconButton } from '@material-ui/core';
import { CloudDownload } from '@material-ui/icons';
import { downloadIconStyles } from './download-icon-style';
import { DownloadIconProps } from './download-icon-types';

export const DownloadIcon: React.FunctionComponent<DownloadIconProps> = memo(
  (props: DownloadIconProps) => {
    const classes = downloadIconStyles(props);

    return (
      <IconButton
        onClick={props.onClick}
        disabled={props.isDisabled}
        className={classes.root}
      >
        <CloudDownload />
      </IconButton>
    );
  },
);
