import MaterialTable, { Column, Icons, Query, Options } from 'material-table';
import React, { forwardRef, memo } from 'react';
import {
  AddBox,
  ArrowUpward,
  Check,
  ChevronLeft,
  ChevronRight,
  Clear,
  CloudDownload,
  DeleteOutline,
  Edit,
  FilterList,
  FirstPage,
  LastPage,
  Remove,
  Search,
  ViewColumn,
} from '@material-ui/icons';
import { ErrorTag, FinishedTag, PendingTag } from '../status-tag/loadable';
import { IconButton } from '@material-ui/core';
import {
  BookTableItemData,
  BookTableResultData,
  BookTableViewProps,
} from './book-table-types';
import { bookTableStyles } from './book-table-styles';

const tableIcons: Icons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  // Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref}/>),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

export const BookTableView: React.FunctionComponent<BookTableViewProps> = memo(
  (props: BookTableViewProps) => {
    const classes = bookTableStyles(props);

    const tableOptions: Options = {
      showTitle: false,
      pageSize: props.pageSize,
      pageSizeOptions: [10, 20, 30],
      searchFieldAlignment: 'left',
      draggable: false,
      debounceInterval: 400,
    };

    const columns: Column<BookTableItemData>[] = [
      { title: 'Name', field: 'name' },
      { title: 'URL', field: 'url' },
      {
        title: 'Status',
        field: 'status',
        render: (rowData: BookTableItemData): React.ReactNode => {
          switch (
            rowData.status // TODO: Add default (a gray undefined)
          ) {
            case 'finished':
              return <FinishedTag />;
            case 'pending':
              return <PendingTag />;
            case 'error':
              return <ErrorTag />;
          }
        },
      },
      {
        title: 'Download',
        field: 'downloadAction',
        sorting: false,
        render: (rowData): React.ReactNode => (
          <IconButton onClick={rowData.downloadAction}>
            <CloudDownload />
          </IconButton>
        ),
      },
    ];
    const queryFunction = (
      query: Query<BookTableItemData>,
    ): Promise<BookTableResultData> => {
      const page = query.page + 1;
      const pageSize = query.pageSize;
      const orderBy =
        query.orderBy === undefined ? undefined : query.orderBy.field;
      const orderDirection =
        query.orderDirection !== 'asc' && query.orderDirection !== 'desc'
          ? undefined
          : query.orderDirection;
      const search = query.search.trim() === '' ? undefined : query.search;
      return props
        .dataFunction(page, pageSize, orderBy, orderDirection, search)
        .then(result => {
          result.page = result.page - 1;
          return result;
        });
    };

    return (
      <div className={classes.root}>
        <MaterialTable
          icons={tableIcons}
          options={tableOptions}
          columns={columns}
          // data={props.data}
          data={queryFunction}
        />
      </div>
    );
  },
);
