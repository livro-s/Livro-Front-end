import React from 'react';
import './Notice.scss';
import NoticeCard from './NoticeCard/NoticeCard';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
const Notie = ({ prevPage, nextPage, page, cardTemp }) => {
  return (
    <>
      <div className="Notice" />
      <div className="NoticeCardWrap">{cardTemp}</div>
      <div className="NoticePageNationWrap">
        <div
          className="NoticePageNationWrap-PrevButton"
          onClick={() => prevPage()}
        >
          <FiChevronLeft />
        </div>
        <div className="NoticePageNationWrap-CurrentPage">{page}</div>
        <div
          className="NoticePageNationWrap-NextButton"
          onClick={() => nextPage()}
        >
          <FiChevronRight />
        </div>
      </div>
    </>
  );
};

export default Notie;
