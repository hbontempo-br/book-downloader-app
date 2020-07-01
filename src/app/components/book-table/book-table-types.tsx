import * as React from 'react';

export type ColumnData = string | React.Component | JSX.Element;

export interface BookTableProps {
  onChangePage: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    page: number,
  ) => void;
  onChangeRowsPerPage: React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  >;
  count: number;
  rowsPerPage: number;
  page;
  data: Row[];
  rowsPerPageOptions: number[];
}

export interface Header {
  name: ColumnData;
  url: ColumnData;
  status: ColumnData;
  download: ColumnData;
}

export interface Row extends Header {
  rowId: string;
}
