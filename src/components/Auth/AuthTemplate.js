import React from 'react';
import './AuthTemplate.scss';
import Login from './Login/Login';
import Register from './Register/Register';

const AuthTemplate = ({ children }) => {
  return (
    <div className="AuthTemplate">
      <div className="AuthTemplate-AuthBox">
        <div className="AuthTemplate-AuthBox-InnerBox">
          {/* <Login /> */}
          <Register />
        </div>
      </div>
    </div>
  );
};

export default AuthTemplate;
