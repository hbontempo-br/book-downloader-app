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
              <TableCell /* TODO: Add Style */>{header.name}</TableCell>
              <TableCell /* TODO: Add Style */>{header.url}</TableCell>
              <TableCell /* TODO: Add Style */>{header.status}</TableCell>
              <TableCell /* TODO: Add Style */>{header.download}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.map(row => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.rowId}>
                  <TableCell /* TODO: Add Style */>{row.name}</TableCell>
                  <TableCell /* TODO: Add Style */>{row.url}</TableCell>
                  <TableCell /* TODO: Add Style */>{row.status}</TableCell>
                  <TableCell /* TODO: Add Style */>{row.download}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={props.rowsPerPageOptions}
        component="div"
        count={props.count}
        rowsPerPage={props.rowsPerPage}
        page={props.page}
        onChangePage={props.onChangePage}
        onChangeRowsPerPage={props.onChangeRowsPerPage}
      />
    </Paper>
  );
};
