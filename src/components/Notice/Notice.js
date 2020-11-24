import React from 'react';
import './Notice.scss';
import NoticeCard from './NoticeCard/NoticeCard';
const Notie = () => {
  return (
    <>
      <div className="Notice" />
      <div className="NoticeCardWrap">
        <NoticeCard />

        <NoticeCard />
        <NoticeCard />
      </div>
    </>
  );
};

export default Notie;
