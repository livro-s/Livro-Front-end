import React from 'react';
import { useHistory } from 'react-router-dom';
import './MainNotice.scss';

const MainNotice = () => {
  const history = useHistory();

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
                  도서관 이용 공지사항 안내
                </div>
                <div className="MainNotice-Wrap-Card-InnerItem-Wrapper-UnderText">
                  이성은 있는 있을 행복스럽고 실현에 것이다. 소리다.이것은
                  인도하겠다는 능히 날카로우나 인생에 천고에 든 그들은 아니다.
                  꽃이 창공에 대고, 풀이 것이다. 안고, 속에서 뜨 이성은 있는
                  있을 행복스럽고 실현에 것이다. 소리다.이것은 인도하겠다는 능히
                  날카로우나 인생에 천고에 든 그들은 아니다. 꽃이 창공에 대고,
                  풀이 것이다. 안고, 속에서 뜨고 이성은 있는 있을 행복스럽고
                  실현에 것이다. 소리다.이것은 인도하겠다는 능히 날카로우나
                  인생에 천고에 든 그들은 아니다. 꽃이 창공에 대고, 풀이 것이다.
                  안고, 속에서 뜨고고 풀이 것이다. 안고, 속에서 뜨고 이성은 있는
                  있을 행복스럽고 풀이 것이다. 안고, 속에서 뜨고 이성은 있는
                  있을 행복스럽고 풀이 것이다. 안고, 속에서 뜨고 이성은 있는
                  풀이 것이다. 안고, 속에서 뜨고 이성은 있는 있을 행복스럽고
                  풀이 것이다. 안고, 속에서 뜨고 이성은 있는 있을 행복스럽고
                  있을 행복스럽고 풀이 것이다. 안고, 속에서 뜨고 이성은 있는
                  있을 행복스럽고 풀이 것이다. 안고, 속에서 뜨고 이성은 있는
                  있을 행복스럽고
                </div>
              </div>
              <div className="MainNotice-Wrap-Card-InnerItem-Wrapper-Date">
                2020년 8월 20일
              </div>
            </div>
          </div>
          <div className="MainNotice-Wrap-ButtonWrap">
            <button className="MainNotice-Wrap-ButtonWrap-Button" onClick={() => history.push('/notice')}>
              더보기
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainNotice;
