import React, { useState } from "react";
import "./Topbar.scss";
import { GoSearch } from 'react-icons/go';
import { getToken } from "lib/util/Token";
import { useHistory } from "react-router-dom";
import { useKeyDown } from "lib/hooks/useKeyDown";

const Topbar = ({ isSearch = true }) => {
  const history = useHistory();
  const [keyword, setKeyword] = useState('');

  return (
    <div className="Topbar">
      {
        isSearch &&
        <div className="Topbar-SearchWrapper">
          <GoSearch className="Topbar-SearchWrapper-Icon" />
          <input
            type ="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder ="찾고싶은 도서를 검색해보세요"
            // eslint-disable-next-line react-hooks/rules-of-hooks
            onKeyDown={(e) => useKeyDown(e, () => history.push(`/search?keyword=${keyword}`))}
          />
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
