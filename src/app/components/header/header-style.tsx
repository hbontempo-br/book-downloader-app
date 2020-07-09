import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import background from './background2.jpg';

export const headerStyles = makeStyles<Theme>((theme: Theme) => createStyles({
  root: {
    width: '100vw',
    // height: '500px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '30px',
    paddingBottom: '30px',
    alignItems: 'center',
  },
  logo: {
    position: 'relative',
  },
  form: {
    marginTop: '20px',
    position: 'relative',
    width: '60%',
  },
}));
