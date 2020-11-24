import React, { useCallback, useEffect, useState } from 'react';
import useStores from 'lib/hooks/useStores';
import AuthTemplate from 'components/Auth/AuthTemplate';
import {
  ValidationRegister,
  ValidationLogin,
  ValidationEmail,
} from 'validation/Auth/AuthValidation';
import { SuccessToast, ErrorToast } from 'lib/Toast';
import { withRouter } from 'react-router-dom';
import { observer } from 'mobx-react';
const AuthContainer = observer(({ history }) => {
  const { store } = useStores();
  const { handleLogin, handleRegister, isLoading } = store.AuthStore;
  const [isRegister, setIsRegister] = useState(false);
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [school, setSchool] = useState('');
  const [studentNo, setStudentNo] = useState('');

  const requestHandleLogin = useCallback(async () => {
    const data = {
      userId,
      password,
    };
    if (!ValidationLogin(data)) {
      return;
    }
    await handleLogin(data)
      .then((res) => {
        const { status } = res;
        if (status === 200) {
          sessionStorage.setItem('livros-token', res.data.accessToken);
          SuccessToast('로그인 성공');
          history.push('/');
          return;
        }
      })
      .catch((err) => {
        const { status } = err.response;
        if (status === 400) {
          ErrorToast('아이디나 비밀번호 실패');
        }
      });
  }, [handleLogin, history, password, userId]);

  const requestHandleRegister = useCallback(async () => {
    const data = {
      userId,
      password,
      name,
      school,
      studentNo,
    };
    if (!ValidationRegister(data)) {
      return;
    }
    if (!ValidationEmail(data)) {
      return;
    }
    await handleRegister(data)
      .then((res) => {
        const { status } = res;
        if (status === 201) {
          if (status === 201) {
            SuccessToast('회원가입 성공');
            setIsRegister(false);
          }
        }
      })
      .catch((err) => {
        const { status } = err.response;
        if (status === 409) {
          ErrorToast('이메일 중복');
        }
      });
  }, [handleRegister, name, password, school, studentNo, userId]);

  const handleIsRegister = useCallback(() => {
    setIsRegister(true);
  }, []);

  const handleIsLogin = useCallback(() => {
    setIsRegister(false);
  }, []);

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  return (
    <AuthTemplate
      isLoading={isLoading}
      userId={userId}
      setUserId={setUserId}
      password={password}
      setPassword={setPassword}
      requestHandleLogin={requestHandleLogin}
      name={name}
      setName={setName}
      school={school}
      setSchool={setSchool}
      studentNo={studentNo}
      setStudentNo={setStudentNo}
      requestHandleRegister={requestHandleRegister}
      isRegister={isRegister}
      handleIsRegister={handleIsRegister}
      handleIsLogin={handleIsLogin}
    />
  );
});

export default withRouter(AuthContainer);
