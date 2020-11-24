import React from 'react';
import './AuthTemplate.scss';
import Login from './Login/Login';
import Register from './Register/Register';

const AuthTemplate = ({
  isRegister,
  handleIsRegister,
  handleIsLogin,
  requestHandleLogin,
  userId,
  setUserId,
  password,
  setPassword,
  name,
  setName,
  school,
  setSchool,
  studentNo,
  setStudentNo,
  requestHandleRegister,
  isLoading,
}) => {
  return (
    <div className="AuthTemplate">
      <div className="AuthTemplate-AuthBox">
        <div className="AuthTemplate-AuthBox-InnerBox">
          {isRegister ? (
            <Register
              handleIsLogin={handleIsLogin}
              userId={userId}
              setUserId={setUserId}
              password={password}
              setPassword={setPassword}
              name={name}
              setName={setName}
              school={school}
              setSchool={setSchool}
              studentNo={studentNo}
              setStudentNo={setStudentNo}
              requestHandleRegister={requestHandleRegister}
              isLoading={isLoading}
            />
          ) : (
            <Login
              handleIsRegister={handleIsRegister}
              requestHandleLogin={requestHandleLogin}
              userId={userId}
              setUserId={setUserId}
              password={password}
              setPassword={setPassword}
              isLoading={isLoading}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthTemplate;
