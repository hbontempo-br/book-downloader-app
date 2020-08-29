import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  black,
  white,
  yellow700,
  yellowA200,
} from 'material-ui/styles/colors';

export const newBookFormStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textFieldLabel: {
    color: black,
    opacity: 0.5,
    '&.focused': {
      color: black,
      opacity: 0.5,
    },
  },
  textField: {
    // TODO: borderRadius is not working as expected on the textField on new-book-form
    borderRadius: '15px',
    backgroundColor: white,
    width: '100%',
    minWidth: '400px',
    marginBottom: '10px',
  },
  errorHelper: {
    // TODO: backgroundColor is not working as expected on the errorHelper on new-book-form
    backgroundColor: white,
  },
  submitButton: {
    borderRadius: '15px',
    width: '60%',
    minWidth: '400px',
    height: '50px',
    backgroundColor: yellowA200,
    '&:hover, &:focus': {
      backgroundColor: yellow700,
    },
  },
  loadingButton: {
    color: black,
  },
}));
