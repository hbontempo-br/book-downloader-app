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
    download: 'Download',
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{header.name}</TableCell>
              <TableCell>{header.url}</TableCell>
              <TableCell>{header.status}</TableCell>
              <TableCell>{header.download}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={row.rowId}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.url}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>{row.download}</TableCell>
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
