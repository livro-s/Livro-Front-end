import React, { useEffect, useCallback, useState } from 'react';
import { observer } from 'mobx-react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import useStores from 'lib/hooks/useStores';
import SearchBook from 'components/SearchBook';
import moment from 'moment';
import { SuccessToast } from 'lib/Toast';

const SearchContainer = observer(() => {
  const { store } = useStores();
  const { handleSearchBooks, handleLoanBook, handleResetList, searchList } = store.SearchStore;

  const { search } = useLocation();
  const { keyword } = queryString.parse(search);
  
  const nowDate = moment().format('YYYY-MM-DD');
  const [inputKeyword, setInputKeyword] = useState(keyword || '');

  const requestSearchBooks = useCallback(async (e) => {
    if (keyword === inputKeyword || (e && e.key === 'Enter')) {
      await handleSearchBooks(inputKeyword)
      .catch((error) => {
        console.log(error);
      });
    }
  }, [handleSearchBooks, inputKeyword, keyword]);

  const requestLoanBook = useCallback(async (id) => {
    const request = {
      id,
      loanDate: nowDate,
      returnDate: moment(nowDate).add(7, 'days'),
    };

    await handleLoanBook(request)
    .then(({ status }) => {
      if (status === 201) {
        SuccessToast('도서 대출을 성공하였습니다.');
        handleSearchBooks(inputKeyword);
      }
    })

    .catch((error) => {
      console.log(error);
    })
  }, [handleLoanBook, handleSearchBooks, inputKeyword, nowDate]);

  useEffect(() => {
    if (keyword) {
      requestSearchBooks();
    }

    return () => handleResetList();
  }, [handleResetList, keyword, requestSearchBooks]);

  return (
    <SearchBook
      inputKeyword={inputKeyword}
      setInputKeyword={setInputKeyword}
      requestSearchBooks={requestSearchBooks}
      searchList={searchList}
      requestLoanBook={requestLoanBook}
    />
  );
});

export default SearchContainer;