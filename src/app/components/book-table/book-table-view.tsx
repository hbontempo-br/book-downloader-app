import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@material-ui/core';
import { bookTableStyles } from './book-table-styles';
import { BookTableProps, Header } from './book-table-types';

export const BookTableView: React.FunctionComponent<BookTableProps> = (
  props: BookTableProps,
) => {
  const classes = bookTableStyles();

  const {
    rowsPerPageOptions,
    count,
    rowsPerPage,
    page,
    onChangePage,
    onChangeRowsPerPage,
    data,
  } = props;

  const header: Header = {
    name: 'Name',
    url: 'URL',
    status: 'Status',
    download: '',
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table>
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell className={classes.tableHeadColumnName}>{header.name}</TableCell>
              <TableCell className={classes.tableHeadColumnURL}>{header.url}</TableCell>
              <TableCell className={classes.tableHeadColumnStatus}>{header.status}</TableCell>
              <TableCell className={classes.tableHeadColumnDownload}>{header.download}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow className={classes.tableBody} hover role="checkbox" tabIndex={-1} key={row.rowId}>
                <TableCell className={classes.tableBodyColumnName}>{row.name}</TableCell>
                <TableCell className={classes.tableBodyColumnURL}>{row.url}</TableCell>
                <TableCell className={classes.tableBodyColumnStatus}>{row.status}</TableCell>
                <TableCell className={classes.tableBodyColumnDownload}>{row.download}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={rowsPerPageOptions}
        component="div"
        count={count}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={onChangePage}
        onChangeRowsPerPage={onChangeRowsPerPage}
      />
    </Paper>
  );
};
