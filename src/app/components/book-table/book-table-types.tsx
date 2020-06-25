import { QueryResult } from 'material-table';

export interface BookTableViewProps {
  pageSize: number;
  width: string;
  dataFunction: (
    page: number,
    pageSize: number,
    orderBy?: string,
    orderDirection?: string,
    search?: string,
  ) => Promise<BookTableResultData>;
}

export interface BookTableItemData {
  name: string;
  url: string;
  status: string;
  downloadAction: () => void;
}

export type BookTableResultData = QueryResult<BookTableItemData>;
