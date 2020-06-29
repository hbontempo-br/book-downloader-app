import React, { useEffect } from 'react';
import { createContext, useState } from 'react';
import {
  BookListContextAction,
  BookListContextData,
  BookListContextProps,
} from './book-list-context-types';
import { BookListReducer } from './book-context-reducer';

const defaultBookList: BookListContextData = {
  books: [],
  filter: {
    page: 1,
    pageSize: 10,
  },
  totalCount: 0,
};

export const BookListContext = createContext<{
  state: BookListContextData;
  dispatch: (BookListContextAction) => void;
}>({
  state: defaultBookList,
  dispatch: (type: 'REFRESH') => {},
});

export const BookListContextProvider = ({ children }: BookListContextProps) => {
  const [state, setState] = useState(defaultBookList);

  const dispatch = useCallback((action: BookListContextAction): void => {
    BookListReducer(state, action).then(result => {
      setState(result);
    });
  });

  useEffect(() => {
    console.log('useEffect = DidMount?');
    dispatch({ type: 'CHANGE_FILTER', filter: defaultBookList.filter });
  }, [dispatch]);

  return (
    <BookListContext.Provider value={{ state, dispatch }}>
      {children}
    </BookListContext.Provider>
  );
};
