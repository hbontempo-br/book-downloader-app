import React, { memo } from 'react';
import { TextField, Button } from '@material-ui/core';
import { newBookFormStyles } from './new-book-form-style';

export const NewBookForm: React.FunctionComponent = memo(
  () => {
    const classes = newBookFormStyles();
    return (
      <div className={classes.root}>
        <TextField
          className={classes.textField}
          label="Name"
          placeholder="BookName.pdf"
          variant="filled"
          InputProps={{
            disableUnderline: true,
          }}
          InputLabelProps={{
            className: classes.textFieldLabel,
          }}
          size="small"
        />
        <TextField
          className={classes.textField}
          label="URL"
          placeholder=" www.book-to-download.something/stuff/page01_other_stuff"
          variant="filled"
          InputProps={{
            disableUnderline: true,
          }}
          InputLabelProps={{
            className: classes.textFieldLabel,
          }}
          size="small"
        />
        <Button className={classes.submitButton}>Get Smarter!</Button>
      </div>
    );
  },
);
