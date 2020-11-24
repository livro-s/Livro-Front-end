import React from "react";
import "./SearchBook.scss";
import { GoSearch } from 'react-icons/go';
import BookIcon from 'assets/icons/BookIcon.png';
import { Palette } from "styles/Palette/Palette";
import { useKeyDown } from "lib/hooks/useKeyDown";

const SearchBook = ({ keyword, setKeyword, requestSearchBooks }) => {
  const { main } = Palette;

  return (
    <div className="SearchBook">
      <div className="SearchBook-Background"></div>
      <div className="SearchBook-TopWrapper">
        <div className="SearchBook-TopWrapper-InputWrapper">
          <div className="SearchBook-TopWrapper-InputWrapper-InputBox">
            <img className="SearchBook-TopWrapper-InputWrapper-InputBox-Icon" src ={BookIcon} alt ="bookicon" />
            <input
              type ="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              // eslint-disable-next-line react-hooks/rules-of-hooks
              onKeyDown={(e) => useKeyDown(e, requestSearchBooks)}
              placeholder="찾고싶은 도서를 검색해보세요"
            />
          </div>

          <GoSearch className="SearchBook-TopWrapper-InputWrapper-InputIcon" />
        </div>

        <button className="SearchBook-TopWrapper-Button" onClick={requestSearchBooks}>검색</button>
      </div>

      <div className="SearchBook-UnderBorder"></div>
      <div className="SearchBook-SearchList">
        <div className="SearchBook-SearchList-NoSearch">LIVRO<span style ={{ color: main }}>'S</span></div>
        <div className="SearchBook-SearchList-SubTitle">어디서든 편하게 도서관 서비스를 이용해보세요</div>
      </div>
    </div>
  );
};

export default SearchBook;
