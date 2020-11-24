import React, { useEffect } from 'react';
import './Notice.scss';
// import NoticeCard from './NoticeCard/NoticeCard';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Loading from 'components/Common/Loading';
import { getToken } from 'lib/util/Token';
import { useHistory } from 'react-router-dom';
import { WarningToast } from 'lib/Toast';
const Notice = ({ prevPage, nextPage, page, cardTemp, isLoading }) => {
  const history = useHistory();
  useEffect(() => {
    if (!getToken()) {
      history.push('/');
      WarningToast('로그인후 사용 가능합니다.');
    }
  }, [history]);
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
