import React from 'react';
import './NoticeCard.scss';
import exampleImg from 'assets/images/home-office.png';
const NoticeCard = () => {
  return (
    <div className="NoticeCard">
      <div className="NoticeCard-Wrap">
        <div className="NoticeCard-Wrap-Img">
          <img src={exampleImg} alt={exampleImg} />
        </div>
        <div className="NoticeCard-Wrap-TitleWrap">
          <div className="NoticeCard-Wrap-TitleWrap-TopTitle">
            도서관 내 소음 문제 관련 안내
          </div>
          <div className="NoticeCard-Wrap-TitleWrap-SubTitle">
            이성은 있는 있을 행복스럽고 실현에 것이다. 소리다.이것은
            인도하겠다는 능히 날카로우나 인생에 천고에 든 그들은 아니다. 꽃이
            창공에 대고, 풀이 것이다. 안고, 속에서 뜨고,이성은 있는 있을
            행복스럽고
          </div>
        </div>
        <div className="NoticeCard-Wrap-DateWrap">2020-09-12</div>
      </div>
    </div>
  );
};

export default NoticeCard;
