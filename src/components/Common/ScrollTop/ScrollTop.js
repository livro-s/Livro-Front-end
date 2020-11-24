import React, { useState, useEffect, useCallback } from 'react';
import { BsBoxArrowInUp } from 'react-icons/bs';
import './ScrollTop.scss';

const ScrollTop = () => {
  const [isTop, setIsTop] = useState(true);

  const detectingScroll = useCallback(() => {
    if (document.documentElement.scrollTop > 0) {
      setIsTop(false);
    } else {
      setIsTop(true);
    }
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    document.addEventListener('scroll', detectingScroll, true);

    return () => document.removeEventListener('scroll', detectingScroll, true);
  }, [detectingScroll]);

  return (
    <>
      {!isTop && (
        <div className="ScrollTop" onClick={scrollToTop}>
          <BsBoxArrowInUp />
        </div>
      )}
    </>
  );
};

export default ScrollTop;
