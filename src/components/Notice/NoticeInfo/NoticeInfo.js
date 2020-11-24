import React from 'react';
import './NoticeInfo.scss';
import moment from 'moment';
import { withRouter } from 'react-router-dom';
import Loading from 'components/Common/Loading';

const NoticeInfo = ({ detailRes, history, isLoading }) => {
  const { uuid, title, content, createdAt } = detailRes;
  return (
    <>
      {isLoading && <Loading />}

      <div className="NoticeInfo" />
      <div className="NoticeInfoWrap">
        <div className="NoticeInfoWrap-Title">{title}</div>
        <div className="NoticeInfoWrap-Date">
          {moment(createdAt).format('YYYY년 MM월 DD일')}
        </div>
        <div className="NoticeInfoWrap-Text">{content}</div>
        <div className="NoticeInfoWrap-ButtonWrap">
          <button
            className="NoticeInfoWrap-ButtonWrap-Button"
            onClick={() => history.go(-1)}
          >
            돌아가기
          </button>
        </div>
      </div>
    </>
  );
};

export default withRouter(NoticeInfo);
