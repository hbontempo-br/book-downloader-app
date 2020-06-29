import React, { useContext } from 'react';
import { BookListContext } from '../../contexts/book-list-context/book-list-context';
import { Row } from './book-table-types';
import { BookTableView } from './book-table-view';
import { BookListContextFilter } from '../../contexts/book-list-context/book-list-context-types';
import { ErrorTag, FinishedTag, PendingTag } from '../status-tag/loadable';
import { GetBookURL } from '../../services/BookDownloader';
import { CloudDownload } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import { DownloadIcon } from '../download-icon';

const selectStatusTag = (status: string): JSX.Element => {
  switch (status) {
    case 'finished':
      return <FinishedTag />;
    case 'pending':
      return <PendingTag />;
    case 'error':
      return <ErrorTag />;
    default:
      return <ErrorTag />;
  }
};

const selectDownloadIcon = (status: string): JSX.Element => {
  if (status !== 'finished') {
    return <CloudDownload color={'disabled'} />;
  } else {
    return <CloudDownload />;
  }
};

const downloadBook = (bookKey: string): void => {
  GetBookURL(bookKey).then(result => {
    window.open(result, '_blank');
  });
};

export const BookTable: React.FunctionComponent = () => {
  const { state, dispatch } = useContext(BookListContext);
  const rowsPerPageOptions = [10, 20, 30];
  const page = state.filter.page - 1;
  const rowsPerPage = state.filter.pageSize;
  const count = state.totalCount;

  let data: Row[] = state.books.map(book => {
    const isDownloadDisabled = book.status !== 'finished';
    const downloadFunction = () => {
      if (book.status === 'finished') {
        downloadBook(book.bookKey);
      }
    };
    const bd: Row = {
      rowId: book.bookKey,
      name: book.name,
      status: selectStatusTag(book.status),
      url: book.mask,
      download: (
        <DownloadIcon
          isDisabled={isDownloadDisabled}
          onClick={downloadFunction}
        />
      ),
    };
    return bd;
  });

  const updateFilter = (filter: BookListContextFilter) => {
    dispatch({ type: 'CHANGE_FILTER', filter: filter });
  };

  const onChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    page: number,
  ): void => {
    console.log('onChangePage', page);
    let newState = state;
    newState.filter.page = page + 1;
    updateFilter(newState.filter);
  };

  const onChangeRowsPerPage: React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = event => {
    console.log('onChangeRowsPerPage', event);
    let newState = state;
    newState.filter.page = 1;
    newState.filter.pageSize = +event.target.value;
    updateFilter(newState.filter);
  };

  return (
    <BookTableView
      onChangePage={onChangePage}
      onChangeRowsPerPage={onChangeRowsPerPage}
      rowsPerPage={rowsPerPage}
      rowsPerPageOptions={rowsPerPageOptions}
      page={page}
      count={count}
      data={data}
    />
  );
};
