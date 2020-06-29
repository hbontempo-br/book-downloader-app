import React, { useEffect } from 'react';
import { Row } from './book-table-types';
import { BookTableView } from './book-table-view';
import { ErrorTag, FinishedTag, PendingTag } from '../status-tag/loadable';
import { GetBookURL } from '../../services/BookDownloader';
import { DownloadIcon } from '../download-icon';

import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { ApplicationState } from '../../store';
import { filterRequest } from '../../store/books';

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

const downloadBook = (bookKey: string): void => {
  GetBookURL(bookKey).then(result => {
    window.open(result, '_blank');
  });
};

export const BookTable: React.FunctionComponent = () => {
  const page = useSelector((state: ApplicationState) => {
    return state.booksState.pagination.page;
  }, shallowEqual);
  const rowsPerPage = useSelector((state: ApplicationState) => {
    return state.booksState.pagination.pageSize;
  }, shallowEqual);
  const count = useSelector((state: ApplicationState) => {
    return state.booksState.totalCount;
  }, shallowEqual);
  const books = useSelector((state: ApplicationState) => {
    return state.booksState.books;
  }, shallowEqual);
  const filter = useSelector((state: ApplicationState) => {
    return state.booksState.filter;
  }, shallowEqual);
  // console.log('state', state);
  const dispatch = useDispatch();
  const rowsPerPageOptions = [10, 20, 30];
  const pageView = page - 1;
  // const rowsPerPage = state.pagination.pageSize;
  // const count = state.totalCount;

  let data: Row[] = books.map(book => {
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateFilter = (
    page: number,
    pageSize: number,
    name?: string,
    status?: string,
    orderBy?: string,
    orderDirection?: string,
  ) => {
    console.log(
      'update, filter',
      page,
      pageSize,
      name,
      status,
      orderBy,
      orderDirection,
    );
    dispatch(
      filterRequest(
        {
          name: name,
          status: status,
          orderBy: orderBy,
          orderDirection: orderDirection,
        },
        { page: page, pageSize: pageSize },
      ),
    );
  };

  const onChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ): void => {
    console.log('onChangePage', newPage);
    updateFilter(
      newPage + 1, // Due to paging difference
      rowsPerPage,
      filter.name,
      filter.status,
      filter.orderBy,
      filter.orderBy,
    );
  };

  const onChangeRowsPerPage: React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = event => {
    console.log('onChangeRowsPerPage', event);
    updateFilter(
      1, // page reset
      +event.target.value,
      filter.name,
      filter.status,
      filter.orderBy,
      filter.orderDirection,
    );
  };

  useEffect(() => {
    console.log('DidMount');
    updateFilter(
      page,
      rowsPerPage,
      filter.name,
      filter.status,
      filter.orderBy,
      filter.orderDirection,
    );
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <BookTableView
      onChangePage={onChangePage}
      onChangeRowsPerPage={onChangeRowsPerPage}
      rowsPerPage={rowsPerPage}
      rowsPerPageOptions={rowsPerPageOptions}
      page={pageView}
      count={count}
      data={data}
    />
  );
};
