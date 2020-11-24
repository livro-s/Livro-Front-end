import React from "react";
import { useHistory } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const history = useHistory();
  const routers = [
    {
      link: '/',
      name: '홈',
    },

    {
      link: '/mypage',
      name: '마이 페이지'
    },

    {
      link: '/search',
      name: '도서 확인'
    },

    {
      link: '/notice',
      name: '공지 사항'
    },
  ];

  return (
    <div className="Navbar">
      <div className="Navbar-Contents">
        {
          routers.map((router, index) => {
            const { link, name } = router;
            return <div onClick={() => history.push(link)} key={index}>{name}</div>
          })
        }
      </div>
    </div>
  );
};

export default Navbar;
