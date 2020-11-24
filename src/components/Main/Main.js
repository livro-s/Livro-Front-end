import React from 'react';
import { Palette } from 'styles/Palette/Palette';
import './Main.scss';
import MainLibrary from './MainLibrary';
import MainNotice from './MainNotice/MainNotice';
import Footer from 'components/Common/Footer';
import MainNoticeContainer from 'container/NoticeContainer/MainNoticeContainer';

const Main = () => {
  const { main } = Palette;

  return (
    <>
      <div className="Main">
        <div className="Main-Background"></div>
        <div className="Main-Contents">
          <div className="Main-Contents-Title">
            LIVRO<span style={{ color: main }}>'S</span>
          </div>
          <div className="Main-Contents-SubTitle">
            어디서든 편하게 도서 서비스를 이용해보세요.
          </div>
        </div>
      </div>

      <MainLibrary />
      <MainNoticeContainer />
      <Footer />
    </>
  );
};

export default Main;
