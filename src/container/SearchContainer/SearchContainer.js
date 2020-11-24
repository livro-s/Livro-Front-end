import React, { useEffect, useCallback, useState } from 'react';
import { observer } from 'mobx-react';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import useStores from 'lib/hooks/useStores';
import SearchBook from 'components/SearchBook';
import moment from 'moment';
import { ErrorToast, SuccessToast, WarningToast } from 'lib/Toast';

const SearchContainer = observer(() => {
  const { store } = useStores();
  const { handleSearchBooks, handleLoanBook, handleResetList, searchList, isLoading } = store.SearchStore;

  const { search } = useLocation();
  const history = useHistory();
  const { keyword } = queryString.parse(search);
  
  const nowDate = moment().format('YYYY.MM.DD');
  const [inputKeyword, setInputKeyword] = useState(keyword || '');
  const [page, setPage] = useState(1);
  const [maxCount, setMaxCount] = useState(1);

  const requestSearchBooks = useCallback(async (e) => {
    if (keyword === inputKeyword || (e && e.key === 'Enter')) {
      await handleSearchBooks(inputKeyword, page)
      .then((response) => {
        setMaxCount(response.pages);
      })

      .catch((error) => {
        const { status } = error.response;

        if (status === 401) {
          WarningToast("로그인 후 검색 가능합니다.");
          history.push('/auth');
        }
      });
    }
  }, [handleSearchBooks, history, inputKeyword, keyword, page]);

  const prevPage = useCallback(() => {
    setPage(page - 1);
  }, [page]);

  const nextPage = useCallback(async () => {
    setPage(page + 1);
  }, [page]);

  const requestLoanBook = useCallback(async (id) => {
    const request = {
      id,
      loanDate: nowDate,
      returnDate: moment(nowDate).add(7, 'days').format('YYYY.MM.DD'),
    };

    await handleLoanBook(request)
    .then(({ status }) => {
      if (status === 201) {
        SuccessToast('도서 대출을 성공하였습니다.');
        requestSearchBooks();
      }
    })

    .catch((error) => {
      const { status } = error.response;
      
      switch (status) {
        case 409:
          ErrorToast("이미 책 3권을 빌렸습니다.");
          return;

        case 500:
          ErrorToast('서버 오류입니다.');
          return;

        default:
          return;
      }
    });
  }, [handleLoanBook, nowDate, requestSearchBooks]);

  useEffect(() => {
    if (keyword) {
      requestSearchBooks();
    }

    return () => handleResetList();
  }, [handleResetList, keyword, page, requestSearchBooks]);

  return (
    <SearchBook
      isLoading={isLoading}
      keyword={keyword}
      inputKeyword={inputKeyword}
      setInputKeyword={setInputKeyword}
      maxCount={maxCount}
      page={page}
      prevPage={prevPage}
      nextPage={nextPage}
      requestSearchBooks={requestSearchBooks}
      searchList={searchList}
      requestLoanBook={requestLoanBook}
    />
  );
});

export default SearchContainer;