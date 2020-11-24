import { ErrorToast } from 'lib/Toast';

export const ValidationLogin = (request) => {
  const { userId, password } = request;
  if (!userId.trim() || !password.trim()) {
    ErrorToast('빈 칸 없이 입력해주세요.');
    return false;
  }
  return true;
};

export const ValidationRegister = (request) => {
  const { userId, password, name, school, studentNo } = request;
  if (
    !userId.trim() ||
    !password.trim() ||
    !name.trim() ||
    !school.trim() ||
    !studentNo.trim()
  ) {
    ErrorToast('빈 칸 없이 입력해주세요.');
    return false;
  }
  return true;
};

export const ValidationEmail = (request) => {
  const { userId } = request;
  if (!userId.includes('@')) {
    ErrorToast('정확한 이메일을 입력해 주세요.');
    return false;
  }
  return true;
};
