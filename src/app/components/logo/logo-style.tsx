import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { LogoProps } from './logo-types';

export const logoStyles = makeStyles<Theme, LogoProps>((theme: Theme) => createStyles({
  root: {
    width: '250px',
    height: '250px',
    borderRadius: '50%',
    borderBlockColor: '#000000',
    borderStyle: 'solid',
    borderWidth: '1px',
    backgroundColor: '#FFFACD',
  },
}));
