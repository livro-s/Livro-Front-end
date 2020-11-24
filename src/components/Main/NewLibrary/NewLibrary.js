import React, { useCallback } from "react";
import { AiOutlineClose } from 'react-icons/ai';
import Logo from 'assets/images/Logo.png';
import "./NewLibrary.scss";

const NewLibrary = ({ isModal, setIsModal }) => {
  const inputs = [
    {
      name: '도서명',
      isFullSize: true,
    },

    {
      name: '출판사',
      isFullSize: false,
    },

    {
      name: '저자명',
      isFullSize: false,
    },

    {
      name: '권 수',
      isFullSize: false,
    },

    {
      name: '가격 (원가)',
      isFullSize: false,
    },
  ];

  const handleCloseModal = useCallback(() => {
    setIsModal(!isModal);
  }, [isModal, setIsModal]);
  
  return (
    <>
      <div className="NewLibrary-Overlay" onClick={handleCloseModal}></div>
      <div className="NewLibrary">
        <div className="NewLibrary-Contents">
          <div>
            <div className="NewLibrary-Contents-Top">
              <img className="NewLibrary-Contents-Top-Logo" src ={Logo} alt ="Logo" />
              <AiOutlineClose className="NewLibrary-Contents-Top-Close" onClick={handleCloseModal} />
            </div>

            <div className="NewLibrary-Contents-Title">신간도서 신청</div>
            <div className="NewLibrary-Contents-Inputs">
              {
                inputs.map((input, index) => {
                  const { name, isFullSize } = input;
                  return (
                    <div className={isFullSize ? "NewLibrary-Contents-Inputs-Wrapper-Full" : "NewLibrary-Contents-Inputs-Wrapper"} key={index}>
                      <div className="NewLibrary-Contents-Inputs-Wrapper-Name">{name}</div>
                      <input type ="text" className="NewLibrary-Contents-Inputs-Wrapper-Input" />
                    </div>
                  );
                })
              }
            </div>
          </div>

          <div className="NewLibrary-Buttons">
            <button className="NewLibrary-Buttons-Cancel" onClick={handleCloseModal}>취소</button>
            <button className="NewLibrary-Buttons-Apply">신청</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewLibrary;
