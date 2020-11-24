import React from 'react';
import './NoticeCard.scss';
import moment from 'moment';
import { withRouter } from 'react-router-dom';
const NoticeCard = ({ uuid, title, content, createdAt, history }) => {
  return (
    <div
      className="NoticeCard"
      onClick={() => history.push(`noticeInfo/${uuid}`)}
    >
      <div className="NoticeCard-Wrap">
        <div className="NoticeCard-Wrap-TitleWrap">
          <div className="NoticeCard-Wrap-TitleWrap-TopTitle">{title}</div>
          <div className="NoticeCard-Wrap-TitleWrap-SubTitle">{content}</div>
        </div>
        <div className="NoticeCard-Wrap-DateWrap">
          {moment(createdAt).format('YYYY년 MM월 DD일')}
        </div>
      </div>
    </div>
  );
};

export default withRouter(NoticeCard);
