import React, { useCallback } from "react";
import "./SearchBook.scss";
import { GoSearch } from 'react-icons/go';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import BookIcon from 'assets/svg/BookIcon';
import { Palette } from "styles/Palette/Palette";
import { useKeyDown } from "lib/hooks/useKeyDown";
import { useHistory } from "react-router-dom";
import Loading from "components/Common/Loading";
import { confirmAlert } from 'lib/SweetAlert';

const SearchBook = ({ 
  isLoading,
  keyword,
  inputKeyword,
  setInputKeyword,
  maxCount,
  page,
  prevPage,
  nextPage,
  requestSearchBooks,
  searchList,
  requestLoanBook
}) => {
  const { main } = Palette;
  const history = useHistory();

  const searchRouter = useCallback(() => {
    history.push(`/search?keyword=${inputKeyword}`);
  }, [history, inputKeyword]);

  return (
    <div className="SearchBook">
      {
        isLoading && <Loading />
      }
      <div className="SearchBook-Background"></div>
      <div className="SearchBook-TopWrapper">
        <div className="SearchBook-TopWrapper-InputWrapper">
          <div className="SearchBook-TopWrapper-InputWrapper-InputBox">
            <BookIcon className="SearchBook-TopWrapper-InputWrapper-InputBox-Icon" />
            <input
              type ="text"
              value={inputKeyword}
              onChange={(e) => setInputKeyword(e.target.value)}
              // eslint-disable-next-line react-hooks/rules-of-hooks
              onKeyDown={(e) => useKeyDown(e, () => {
                if (inputKeyword.trim() === '') {
                  history.push('/search');
                  return;
                }
                
                searchRouter();
                requestSearchBooks(e);
              })}
              placeholder="찾고싶은 도서를 검색해보세요"
            />
          </div>

          <GoSearch className="SearchBook-TopWrapper-InputWrapper-InputIcon" onClick={searchRouter} />
        </div>

        <button className="SearchBook-TopWrapper-Button" onClick={searchRouter}>검색</button>
      </div>

      <div className="SearchBook-UnderBorder">
        {
          searchList && searchList.length > 0 ? <div className="SearchBook-UnderBorder-Length">총 {searchList.length * maxCount}개의 도서가 검색되었습니다.</div> : <></>
        }
      </div>
      <div className="SearchBook-SearchList">
        {
          searchList && searchList.length > 0 ? searchList.map((search) => {
            const { author, category, id, image, loanable, location, publisher, title } = search;
            return (
              <div className="SearchBook-SearchList-Item" key={id}>
                <div className="SearchBook-SearchList-Item-Left">
                  <img className="SearchBook-SearchList-Item-Left-Logo" src={image} alt ="logo" />
                  
                  <div className="SearchBook-SearchList-Item-Left-Contents">
                    <div>{title}</div>

                    <div>저자: {author}</div>
                    <div>출판사: {publisher}</div>
                    <div>분야: {category}</div>
                  </div>
                </div>

                <div className="SearchBook-SearchList-Item-Right">
                  <div className="SearchBook-SearchList-Item-Right-Contents">
                    <div className={loanable ? "SearchBook-SearchList-Item-Right-Contents-Loanable" : "SearchBook-SearchList-Item-Right-Contents-Disable"}>
                      {loanable ? '대출 가능' : '대출중'}
                    </div>
                    <div>{location}</div>
                    <button
                      className={loanable ? "SearchBook-SearchList-Item-Right-Contents-Button" : "SearchBook-SearchList-Item-Right-Contents-DisableButton"}
                      onClick={() => {
                        if (loanable) {
                          confirmAlert('잠시만요', '책을 대출하시겠습니까?', 'info', () => requestLoanBook(id));
                        }
                      }}
                    >
                      대출
                    </button>
                  </div>
                </div>
              </div>
            );
          }) : !isLoading && keyword ? <div className="SearchBook-SearchList-NoResults">검색 결과가 없습니다</div> : <></>
        }

        {
          keyword === undefined &&
          <>
            <div className="SearchBook-SearchList-NoSearch">LIVRO<span style ={{ color: main }}>'S</span></div>
            <div className="SearchBook-SearchList-SubTitle">어디서든 편하게 도서관 서비스를 이용해보세요</div>
          </>
        }
      </div>

      <div className="SearchBook-PageWrapper">
        {
          page > 1 &&
          <div className="SearchBook-PageWrapper-LeftWrap" onClick={prevPage}>
            <FiChevronLeft />
          </div>
        }
        <div className="SearchBook-PageWrapper-Count">{page}</div>
        {
          page < maxCount &&
          <div className="SearchBook-PageWrapper-RightWrap" onClick={nextPage}>
            <FiChevronRight />
          </div>
        }
      </div>
    </div>
  );
};

export default SearchBook;
