import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import * as Pages from 'pages';

const App = () => {
  const { Main, Search } = Pages;

  return (
    <Switch>
      <Route exact path ="/" component={Main} />
      <Route exact path ="/search" component={Search} />
    </Switch>
  );
};

export default App;
