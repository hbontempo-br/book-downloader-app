import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const bookTableStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    width: '100%',
  },
  container: {
    minWidth: '450px',
  },
  tableHead: {},
  tableHeadColumnName: {
    whiteSpace: 'nowrap',
  },
  tableHeadColumnURL: {
    whiteSpace: 'nowrap',
  },
  tableHeadColumnStatus: {
    whiteSpace: 'nowrap',
  },
  tableHeadColumnDownload: {
    width: '50px',
  },
  tableBody: {},
  tableBodyColumnName: {
    maxWidth: '20%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  tableBodyColumnURL: {
    // minWidth: '10px',
    maxWidth: '30%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  tableBodyColumnStatus: {},
  tableBodyColumnDownload: {},

}));
