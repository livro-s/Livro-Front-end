import React from 'react';
import './Register.scss';
import { SelectBox } from 'components/Common/SelectBox';
import Loading from 'components/Common/Loading';

const Register = ({
  handleIsLogin,
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
  const [isNext, setIsNext] = React.useState(false);

  return (
    <div className="Register">
      {isLoading && <Loading />}
      {!isNext ? (
        <>
          <div className="Register-Title">SIGNUP</div>
          <div className="Register-SchoolInputWrap">
            <div className="Register-SchoolInputWrap-SchoolNameWrap">
              <div className="Register-SchoolInputWrap-SchoolNameWrap-InnerWrap">
                <div className="Register-SchoolInputWrap-SchoolNameWrap-InnerWrap-TopTitle">
                  학교
                </div>
                <SelectBox
                  onChange={(e) => setSchool(e.target.value)}
                  style={{ backgroundColor: 'white', height: '100%' }}
                >
                  <option>학교를 선택해 주세요.</option>
                  <option>대덕소프트웨어마이스터고등학교</option>
                  <option>광주소프트웨어마이스터고등학교</option>
                  <option>대구소프트웨어고등학교</option>
                </SelectBox>
              </div>
            </div>
            <div className="Register-SchoolInputWrap-SchoolGradeWrap">
              <div className="Register-SchoolInputWrap-SchoolGradeWrap-InnerWrap">
                <div className="Register-SchoolInputWrap-SchoolGradeWrap-InnerWrap-TopTitle">
                  학번
                </div>
                <input
                  type="text"
                  className="Register-SchoolInputWrap-SchoolGradeWrap-InnerWrap-SelectBox"
                  value={studentNo}
                  onChange={(e) => setStudentNo(e.target.value)}
                ></input>
              </div>
            </div>
          </div>
          <input
            className="Register-Name"
            placeholder="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="Register-Anther">
            <div
              className="Register-Anther-Approach"
              onClick={() => handleIsLogin()}
            >
              이미 계정이 있으신가요?
            </div>
          </div>
          <button
            className="Register-RegisterButton"
            onClick={() => setIsNext(true)}
          >
            다음
          </button>
        </>
      ) : (
        <div className="Register-NextSection">
          <div className="Register-NextSection-Title">SIGNUP</div>
          <input
            type="text"
            className="Register-NextSection-IdInput"
            placeholder="아이디"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <input
            type="password"
            className="Register-NextSection-PwInput"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="Register-Anther">
            <div
              className="Register-Anther-Approach"
              onClick={() => handleIsLogin()}
            >
              이미 계정이 있으신가요?
            </div>
          </div>
          <button
            className="Register-RegisterButton"
            onClick={() => requestHandleRegister()}
          >
            완성
          </button>
        </div>
      )}
    </div>
  );
};

export default Register;
