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

// const sampleRequest = (
//   page: number,
//   pageSize: number,
//   orderBy?: string,
//   orderDirection?: string,
//   search?: string,
// ): Promise<BookTableResultData> => {
//   return new Promise<BookTableResultData>((resolve, reject) => {
//     const sampleData: BookTableItemData[] = [
//       {
//         name: 'Book1',
//         url: 'Baran',
//         status: 'finished',
//         downloadAction: () => {
//           alert('DownloadAction');
//         },
//       },
//       {
//         name: 'Book2',
//         url: 'Baran',
//         status: 'pending',
//         downloadAction: () => {
//           alert('DownloadAction');
//         },
//       },
//       {
//         name: 'Book1',
//         url: 'Baran',
//         status: 'error',
//         downloadAction: () => {
//           alert('DownloadAction');
//         },
//       },
//     ];
//     const response = {
//       data: sampleData,
//       page: page,
//       totalCount: 44,
//     };
//     // console.log(response);
//     console.log(response);
//     resolve(response);
//   });
// };

export const BookTable: React.FunctionComponent = memo(() => {
  return (
    <BookTableView pageSize={10} width={'700px'} dataFunction={queryFunc} />
  );
});
