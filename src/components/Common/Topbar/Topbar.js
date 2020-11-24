import React from "react";
import "./Topbar.scss";
import { GoSearch } from 'react-icons/go';
import { getToken } from "lib/util/Token";
import { useHistory } from "react-router-dom";

const Topbar = ({ isSearch = true }) => {
  const history = useHistory();

  return (
    <div className="Topbar">
      {
        isSearch &&
        <div className="Topbar-SearchWrapper">
          <GoSearch className="Topbar-SearchWrapper-Icon" />
          <input type ="text" placeholder ="찾고싶은 도서를 검색해보세요" />
        </div>
      }

      <button className="Topbar-Login" onClick={() => history.push('/auth')}>
        {
          getToken() ? '로그아웃' : '로그인'
        }
      </button>
    </div>
  );
};

export default Topbar;
