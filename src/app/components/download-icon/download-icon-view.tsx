import React, { memo } from 'react';
import { downloadIconStyles } from './download-icon-style';
import { DownloadIconProps } from './download-icon-types';
import { IconButton } from '@material-ui/core';
import { CloudDownload } from '@material-ui/icons';

export const DownloadIcon: React.FunctionComponent<DownloadIconProps> = memo(
  (props: DownloadIconProps) => {
    const classes = downloadIconStyles(props);

    return (
      <IconButton onClick={props.onClick} disabled={props.isDisabled}>
        <CloudDownload />
      </IconButton>
    );
  },
);
