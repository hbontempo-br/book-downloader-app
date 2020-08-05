import React from 'react';
import { TextField, Button, CircularProgress } from '@material-ui/core';
import { newBookFormStyles } from './new-book-form-style';
import { NewBookFormProps } from './new-book-form-types';

export const NewBookFormView: React.FunctionComponent<NewBookFormProps> = (
  props: NewBookFormProps,
) => {
  const classes = newBookFormStyles();
  const {
    nameOnChange, urlOnChange, onSubmit, name, url, loading,
  } = props;
  return (
    <div className={classes.root}>
      <TextField
        className={classes.textField}
        label="Name"
        placeholder="BookName.pdf"
        value={name}
        onChange={nameOnChange}
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
        placeholder=" www.book-to-download.something/stuff/page01_other_stuff.png"
        value={url}
        onChange={urlOnChange}
        variant="filled"
        InputProps={{
          disableUnderline: true,
        }}
        InputLabelProps={{
          className: classes.textFieldLabel,
        }}
        size="small"
      />
      <Button className={classes.submitButton} onClick={onSubmit} disabled={loading}>
        {loading ? <CircularProgress className={classes.loadingButton} /> : 'Get Smarter!'}
      </Button>
    </div>
  );
};
