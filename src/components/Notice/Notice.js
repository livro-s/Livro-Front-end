import React from 'react';
import './Notice.scss';
import NoticeCard from './NoticeCard/NoticeCard';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
const Notie = () => {
  return (
    <>
      <div className="Notice" />
      <div className="NoticeCardWrap">
        <NoticeCard />

        <NoticeCard />
        <NoticeCard />
      </div>
      <div className="NoticePageNationWrap">
        <div className="NoticePageNationWrap-PrevButton">
          <FiChevronLeft />
        </div>
        <div className="NoticePageNationWrap-CurrentPage">1</div>
        <div className="NoticePageNationWrap-NextButton">
          <FiChevronRight />
        </div>
      </div>
    </>
  );
};

export default Notie;
