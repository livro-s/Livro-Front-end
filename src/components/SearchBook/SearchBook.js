import React from "react";
import "./SearchBook.scss";
import { GoSearch } from 'react-icons/go';
import BookIcon from 'assets/icons/BookIcon.png';
import { Palette } from "styles/Palette/Palette";

const SearchBook = () => {
  const { main } = Palette;

  return (
    <div className="SearchBook">
      <div className="SearchBook-Background"></div>
      <div className="SearchBook-TopWrapper">
        <div className="SearchBook-TopWrapper-InputWrapper">
          <div className="SearchBook-TopWrapper-InputWrapper-InputBox">
            <img className="SearchBook-TopWrapper-InputWrapper-InputBox-Icon" src ={BookIcon} alt ="bookicon" />
            <input type ="text" placeholder="찾고싶은 도서를 검색해보세요" />
          </div>

          <GoSearch className="SearchBook-TopWrapper-InputWrapper-InputIcon" />
        </div>

        <button className="SearchBook-TopWrapper-Button">검색</button>
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
