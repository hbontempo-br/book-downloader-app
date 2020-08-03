export interface Book {
  bookKey: string;
  name: string;
  mask: string;
  status: string;
}

export interface Pagination {
  currentPage: number;
  nextPage?: number;
  previousPage?: number;
  maxPage: number;
  rowsPerPage: number;
  totalRows: number;
}

export interface PaginatedBookList {
  data: Book[];
  pagination: Pagination;
}

export interface DownloadLink {
  downloadLink: string;
}
