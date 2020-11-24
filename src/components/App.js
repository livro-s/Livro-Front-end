import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import * as Pages from 'pages';
import AuthContainer from 'container/AuthContainer/AuthContainer';
import NoticePage from 'pages/NoticePage';

const App = () => {
  const { Main, Search, MyPage } = Pages;

  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/auth" component={AuthContainer} />
      <Route path="/notice" component={Pages.Notice} />
      <Route path="/myPage" component={MyPage} />
      <Route path="/noticeInfo/:idx" component={Pages.NoticeInfo} />
    </Switch>
  );
};

export default App;
