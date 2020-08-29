import * as React from 'react';
import { ValidationRules } from 'react-hook-form';

export interface NewBookFormData {
  name: string;
  url: string;
}

export interface NewBookFormValidation {
  name: ValidationRules,
  url: ValidationRules,
}

export interface NewBookFormProps extends NewBookFormData{
  nameOnChange: React.ChangeEventHandler<HTMLInputElement>;
  urlOnChange: React.ChangeEventHandler<HTMLInputElement>;
  onSubmit: (any) => void | undefined;
  loading: boolean;
  validation: NewBookFormValidation
}
