import React, { useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { NewBookFormView } from './new-book-form-view';
import { newBookRequest, selectNewBookState } from '../../store';
import { NewBookFormValidation } from './new-book-form-types';

export const NewBookForm: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const {
    loading,
  } = useSelector(selectNewBookState, shallowEqual);
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');

  const nameChangeFunc = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newName = event.target.value;
    setName(newName);
  };

  const urlChangeFunc = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newUrl = event.target.value;
    setUrl(newUrl);
  };

  const validation: NewBookFormValidation = {
    name: {
      required: {
        value: true,
        message: 'Name required',
      },
    },
    url: {
      required: {
        value: true,
        message: 'URL required',
      },
      pattern: {
        // Check if book link starts with https, if has the "pageN_" (N being an integer) and if
        // file extension in a valid image
        // TODO: check valid file formats
        value: /^(https)(.*?)(page\d+_)(.*?)(jpeg|png|jpg)$/i,
        message: 'Invalid URL pattern',
      },
    },
  };

  const convertURLToMask = (cleanURL: string): string => {
    const regex = /(page\d+_)/; // Find pageN_ (N a integer number)
    return cleanURL.replace(regex, 'page{page_number}_');
  };

  const checkFilenameExtension = (cleanName: string): string => (
    // TODO: probably could do a better job cleaning up the book name
    cleanName.endsWith('.pdf') ? cleanName : `${cleanName}.pdf`
  );

  const onSubmit = (): void => {
    const mask = convertURLToMask(url);
    const filename = checkFilenameExtension(name);
    // TODO: check and force .pdf extension
    dispatch(newBookRequest(filename, mask));
  };

  return (
    <NewBookFormView
      nameOnChange={nameChangeFunc}
      urlOnChange={urlChangeFunc}
      onSubmit={onSubmit}
      validation={validation}
      name={name}
      url={url}
      loading={loading}
    />
  );
};
