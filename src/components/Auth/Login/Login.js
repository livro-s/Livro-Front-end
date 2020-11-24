import React from 'react';
import './Login.scss';
import Loading from 'components/Common/Loading';

const Login = ({
  handleIsRegister,
  requestHandleLogin,
  userId,
  setUserId,
  password,
  setPassword,
  isLoading,
}) => {
  return (
    <div className="Login">
      {isLoading && <Loading />}
      <div className="Login-Title">LOGIN</div>
      <input
        className="Login-IdInput"
        type="text"
        placeholder="ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <input
        className="Login-PwInput"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="Login-Anther">
        <div
          className="Login-Anther-Approach"
          onClick={() => handleIsRegister()}
        >
          아직 계정이 없으신가요?
        </div>
      </div>
      <div className="Login-LoginButton" onClick={() => requestHandleLogin()}>
        로그인
      </div>
    </div>
  );
};

export default Login;
