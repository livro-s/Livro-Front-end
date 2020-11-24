import React from 'react';
import { useHistory } from 'react-router-dom';
import './MainNotice.scss';
import moment from 'moment';
import { getToken } from 'lib/util/Token';

const MainNotice = ({ res, NoticeLength }) => {
  console.log(res);
  const history = useHistory();
  const { uuid, title, content, createdAt } = res;
  return (
    <>
      <div className="MainNotice">
        <div className="MainNoticeImg"></div>
        <div className="MainNotice-Wrap">
          <div className="MainNotice-Wrap-TopTitle">공지사항</div>
          <div className="MainNotice-Wrap-SubTitle">
            도서관 관련 중요 공지사항을 빠르게 확인해보세요.
          </div>
          <div className="MainNotice-Wrap-Card">
            <div className="MainNotice-Wrap-Card-InnerItem">
              <div className="MainNotice-Wrap-Card-InnerItem-Wrapper">
                <div className="MainNotice-Wrap-Card-InnerItem-Wrapper-TopTitle">
                  {!getToken() ? '로그인 후 사용해주세요.' : title}
                </div>
                <div className="MainNotice-Wrap-Card-InnerItem-Wrapper-UnderText">
                  {content}
                </div>
              </div>
              <div className="MainNotice-Wrap-Card-InnerItem-Wrapper-Date">
                {moment(createdAt).format('YYYY년 MM월 DD일')}
              </div>
            </div>
          </div>
          <div className="MainNotice-Wrap-ButtonWrap">
            {NoticeLength === 0 ? (
              <button className="MainNotice-Wrap-ButtonWrap-Button disabledButton">
                더보기
              </button>
            ) : (
              <button
                className="MainNotice-Wrap-ButtonWrap-Button"
                onClick={() => history.push('/notice')}
              >
                더보기
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainNotice;
