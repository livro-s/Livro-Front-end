import React, { useCallback, useState } from 'react';
import useStores from 'lib/hooks/useStores';
import AuthTemplate from 'components/Auth/AuthTemplate';

const AuthContainer = () => {
  //   const { store } = useStores();
  const [isRegister, setIsRegister] = useState(false);

  const handleIsRegister = useCallback(() => {
    setIsRegister(true);
  }, []);

  const handleIsLogin = useCallback(() => {
    setIsRegister(false);
  }, []);

  return (
    <AuthTemplate
      isRegister={isRegister}
      handleIsRegister={handleIsRegister}
      handleIsLogin={handleIsLogin}
    />
  );
};

export default AuthContainer;
