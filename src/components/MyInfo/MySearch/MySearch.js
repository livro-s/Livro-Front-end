import React, { useCallback, useState } from 'react';
import { GoSearch } from 'react-icons/go';
import Book from 'assets/svg/Book';
import './MySearch.scss';
import { useHistory } from 'react-router-dom';
import { useKeyDown } from 'lib/hooks/useKeyDown';
import moment from 'moment';

const MySearch = ({ isLoaned, bookdata }) => {
  const history = useHistory();
  const [keyword, setKeyword] = useState('');

  const searchRouter = useCallback(() => {
    history.push(`/search?keyword=${keyword}`);
  }, [keyword, history]);

  console.log(bookdata);

  const filterBookList =
    bookdata.book &&
    bookdata.book.filter((book) => {
      return (
        moment(book.returnDate).format('YYYY-MM-DD') <
        moment().format('YYYY-MM-DD')
      );
    });

  return (
    <div className={!isLoaned ? 'myPage-delay-search' : 'myPage-search'}>
      {isLoaned ? (
        <>
          <div className="myPage-search-input-wrapper">
            <Book />
            <input
              className="myPage-search-input"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              type="text"
              placeholder="찾고싶은 도서를 검색해보세요"
              // eslint-disable-next-line react-hooks/rules-of-hooks
              onKeyDown={(e) => useKeyDown(e, searchRouter)}
            />
            <GoSearch
              style={{ width: 20, height: 20 }}
              onClick={searchRouter}
            />
          </div>
          <button className="myPage-search-button" onClick={searchRouter}>
            검색
          </button>
        </>
      ) : filterBookList && filterBookList.length > 0 ? (
        filterBookList.map((book, idx) => (
          <div className="myPage-search-delay-wrapper" key={idx}>
            <img
              src={book.image}
              alt="책"
              className="myPage-search-delay-wrapper-image"
            />
            <div style={{ fontSize: 18 }}>{book.title}</div>
          </div>
        ))
      ) : (
        '연체된 도서가 없습니다.'
      )}
    </div>
  );
};

export default MySearch;
