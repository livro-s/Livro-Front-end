import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  const routers = [
    {
      link: '',
      name: '회원가입'
    },

    {
      link: '',
      name: '도서 확인'
    },

    {
      link: '',
      name: '공지 사항'
    },
  ];

  return (
    <div className="Navbar">
      <div className="Navbar-Contents">
        {
          routers.map((router, index) => {
            const { link, name } = router;
            return <div key={index}>{name}</div>
          })
        }
      </div>
    </div>
  );
};

export default Navbar;
