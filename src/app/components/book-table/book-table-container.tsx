import React, { memo } from 'react';
import { BookTableView } from './book-table-view';
import { BookTableItemData, BookTableResultData } from './book-table-types';
import {
  GetPaginatedBookList,
  GetBookURL,
} from '../../services/BookDownloader';

const queryFunc = (
  page: number,
  pageSize: number,
  orderBy?: string,
  orderDirection?: string,
  search?: string,
): Promise<BookTableResultData> => {
  return GetPaginatedBookList(search, undefined, page, pageSize).then(
    rawResult => {
      const refinedData: BookTableItemData[] = [];
      for (let rawItem of rawResult.data) {
        const refinedItem: BookTableItemData = {
          name: rawItem.name,
          url: rawItem.mask,
          status: rawItem.status,
          downloadAction: () => {
            GetBookURL(rawItem.bookKey).then(result => {
              console.log(result);
              window.open(result, '_blank');
            });
          },
        };
        refinedData.push(refinedItem);
      }
      const refinedResult: BookTableResultData = {
        data: refinedData,
        page: rawResult.pagination.currentPage,
        totalCount: rawResult.pagination.totalRows,
      };
      console.log(refinedData);
      return refinedResult;
    },
  );
};

export const BookTable: React.FunctionComponent = memo(() => {
  return <BookTableView pageSize={10} dataFunction={queryFunc} />;
});
