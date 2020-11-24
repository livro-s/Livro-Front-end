import React from 'react';
import './Notice.scss';
// import NoticeCard from './NoticeCard/NoticeCard';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Loading from 'components/Common/Loading';
const Notice = ({ prevPage, nextPage, page, cardTemp, isLoading }) => {
  return (
    <>
      {isLoading && <Loading />}
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

export default Notice;
