import React from 'react';
import { Provider } from 'mobx-react';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App';
import stores from 'stores';
import "styles/utils.scss";

const Root = () => {
  return (
    <Provider store={stores}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
