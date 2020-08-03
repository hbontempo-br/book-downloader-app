import React, { useState } from 'react';
import { NewBookFormView } from './new-book-form-view';

export const NewBookForm: React.FunctionComponent = () => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');

  const validateName = (newName: string) => {
    console.log(newName);
    // TODO: validate name
  };

  const nameChangeFunc = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newName = event.target.value;
    setName(newName);
    validateName(newName);
  };

  const validateUrl = (newUrl: string) => {
    console.log(newUrl);
    // TODO: validate url
  };

  const urlChangeFunc = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newUrl = event.target.value;
    setUrl(newUrl);
    validateUrl(newUrl);
  };

  const onSubmit = () => {
    console.log('Submit', name, url);
  };

  return (
    <NewBookFormView
      nameOnChange={nameChangeFunc}
      urlOnChange={urlChangeFunc}
      onSubmit={onSubmit}
      name={name}
      url={url}
    />
  );
};
