import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Route exact path="/" component={() => <div>메인 페이지입니다.</div>} />
      <Route path="/notice" component={() => <div>공지사항 페이지입니다.</div>} />
      <Route path="/myPage" component={() => <div>마이페이지입니다.</div>} />
      <Route path="/search" component={() => <div>도서 검색 페이지입니다</div>} />
    </>
  );
};

export default App;
