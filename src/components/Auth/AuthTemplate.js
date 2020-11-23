import React from 'react';
import './AuthTemplate.scss';
import Login from './Login/Login';
import Register from './Register/Register';

const AuthTemplate = ({ isRegister, handleIsRegister, handleIsLogin }) => {
  return (
    <div className="AuthTemplate">
      <div className="AuthTemplate-AuthBox">
        <div className="AuthTemplate-AuthBox-InnerBox">
          {isRegister ? (
            <Register handleIsLogin={handleIsLogin} />
          ) : (
            <Login handleIsRegister={handleIsRegister} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthTemplate;
