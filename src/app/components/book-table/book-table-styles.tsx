import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const bookTableStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: '12px',
      justifyContent: 'left',
      // padding: '10px',
      alignItems: 'center',
    },
    nameColumn: {
      backgroundColor: '#999999',
    },
  }),
);
