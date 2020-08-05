import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { Row } from './book-table-types';
import { BookTableView } from './book-table-view';
import { ErrorTag, FinishedTag, PendingTag } from '../status-tag/loadable';
import { getBookURL } from '../../services/book-downloader';
import { DownloadIcon } from '../download-icon';

import { selectBookListState, filterRequest } from '../../store';

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
  getBookURL(bookKey).then((result) => {
    window.open(result, '_blank');
  });
};

export const BookTable: React.FunctionComponent = () => {
  const {
    pagination,
    filter,
    books,
    totalCount,
  } = useSelector(selectBookListState, shallowEqual);
  // const page = useSelector(
  //   (state: ApplicationState) => booksState.booksState.pagination.page,
  //   shallowEqual,
  // );
  // const rowsPerPage = useSelector(
  //   (state: ApplicationState) => state.booksState.pagination.pageSize,
  //   shallowEqual,
  // );
  // const count = useSelector(
  //   (state: ApplicationState) => state.booksState.totalCount,
  //   shallowEqual,
  // );
  // const book-list = useSelector(
  //   (state: ApplicationState) => state.booksState.book-list,
  //   shallowEqual,
  // );
  // const filter = useSelector(
  //   (state: ApplicationState) => state.booksState.filter,
  //   shallowEqual,
  // );
  const dispatch = useDispatch();
  const rowsPerPageOptions = [10, 20, 30];
  const pageView = pagination.page - 1;

  const data: Row[] = books.map((book) => {
    const isDownloadDisabled = book.status !== 'finished';
    const downloadFunction = (): void => {
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
    newPage: number,
    newPageSize: number,
    newName?: string,
    newStatus?: string,
    newOrderBy?: string,
    newOrderDirection?: string,
  ): void => {
    dispatch(
      filterRequest(
        {
          name: newName,
          status: newStatus,
          orderBy: newOrderBy,
          orderDirection: newOrderDirection,
        },
        { page: newPage, pageSize: newPageSize },
      ),
    );
  };

  const onChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ): void => {
    updateFilter(
      newPage + 1, // Due to paging difference
      pagination.pageSize,
      filter.name,
      filter.status,
      filter.orderBy,
      filter.orderBy,
    );
  };

  const onChangeRowsPerPage: React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = (event) => {
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
    updateFilter(
      pagination.page,
      pagination.pageSize,
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
      rowsPerPage={pagination.pageSize}
      rowsPerPageOptions={rowsPerPageOptions}
      page={pageView}
      count={totalCount}
      data={data}
    />
  );
};
