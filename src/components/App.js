import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import * as Pages from 'pages';

const App = () => {
  const { Main, Search } = Pages;

  return (
    <Switch>
      <Route exact path ="/" component={Main} />
      <Route exact path ="/search" component={Search} />
      <Route path="/notice" component={() => <div>공지사항 페이지입니다.</div>} />
      <Route path="/myPage" component={() => <div>마이페이지입니다.</div>} />
    </Switch>
  );
};

export default App;
