import * as React from 'react';

export interface NewBookFormProps {
  nameOnChange: React.ChangeEventHandler<HTMLInputElement>;
  urlOnChange: React.ChangeEventHandler<HTMLInputElement>;
  onSubmit: (any) => void | undefined;
  name: string;
  url: string;
}
