import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { BookTableViewProps } from './book-table-types';

export const bookTableStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: (props: BookTableViewProps) => {
        return props.width;
      },
      borderRadius: '12px',
      justifyContent: 'left',
      padding: '10px',
      alignItems: 'center',
    },
  }),
);
