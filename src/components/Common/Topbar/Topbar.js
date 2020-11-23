import React from "react";
import "./Topbar.scss";
import { GoSearch } from 'react-icons/go';

const Topbar = ({ isShow = true }) => {
  return (
    <div className="Topbar">
      <div className="Topbar-SearchWrapper">
        <GoSearch className="Topbar-SearchWrapper-Icon" />
        <input type ="text" placeholder ="찾고싶은 도서를 검색해보세요" />
      </div>

      <button className="Topbar-Login">로그인</button>
    </div>
  );
};

export default Topbar;
