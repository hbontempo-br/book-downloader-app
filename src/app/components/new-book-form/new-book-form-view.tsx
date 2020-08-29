import React from 'react';
import { TextField, Button, CircularProgress } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { newBookFormStyles } from './new-book-form-style';
import { NewBookFormProps, NewBookFormData } from './new-book-form-types';

export const NewBookFormView: React.FunctionComponent<NewBookFormProps> = (
  props: NewBookFormProps,
) => {
  const classes = newBookFormStyles();
  const { register, handleSubmit, errors } = useForm<NewBookFormData>();

  const {
    nameOnChange, urlOnChange, onSubmit, name, url, loading, validation,
  } = props;
  return (
    <form className={classes.root} noValidate onSubmit={handleSubmit(onSubmit)}>
      <TextField
        className={classes.textField}
        label="Name"
        name="name"
        inputRef={register(validation.name)}
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
        FormHelperTextProps={{
          className: classes.errorHelper,
        }}
        size="small"
        disabled={loading}
        error={errors.name !== undefined}
        helperText={errors.name && errors.name.message}
      />
      <TextField
        className={classes.textField}
        label="URL"
        name="url"
        inputRef={register(validation.url)}
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
        FormHelperTextProps={{
          className: classes.errorHelper,
        }}
        size="small"
        disabled={loading}
        error={errors.url !== undefined}
        helperText={errors.url && errors.url.message}
      />
      <Button className={classes.submitButton} type="submit" disabled={loading}>
        {loading ? <CircularProgress className={classes.loadingButton} /> : 'Get Smarter!'}
      </Button>
    </form>
  );
};
