import React, { useEffect, useCallback, useState } from 'react';
import useStores from 'lib/hooks/useStores';
import { observer } from 'mobx-react';
import Notice from 'components/Notice';
import NoticeCard from 'components/Notice/NoticeCard';

const NoticeContainer = observer(() => {
  const { store } = useStores();
  const { handleNoticePage, isLoading } = store.NoticeStore;
  const [page, setPage] = useState(1);
  const [noitcePageArray, setNoticePageArray] = useState([]);

  const requestHandleNoticePage = useCallback(async () => {
    const res = await handleNoticePage(page);
    setNoticePageArray(res);
    if (res.length <= 0) {
      setPage(page - 1);
      return false;
    }
  }, [handleNoticePage, page]);

  const reqestBeforCheckPage = useCallback(async () => {
    const res = await handleNoticePage(page + 1);
  }, [handleNoticePage, page]);

  const prevPage = () => {
    if (page <= 1) {
      setPage(1);
    } else {
      setPage(page - 1);
    }
  };

  const nextPage = () => {
    if (!requestHandleNoticePage()) {
      return;
    }

    setPage(page + 1);
  };

  useEffect(() => {
    requestHandleNoticePage();
  }, [requestHandleNoticePage]);

  useEffect(() => {
    reqestBeforCheckPage();
  }, [reqestBeforCheckPage]);

  const cardTemp =
    noitcePageArray &&
    noitcePageArray.map((data) => {
      const { uuid, title, content, createdAt } = data;
      return (
        <NoticeCard
          uuid={uuid}
          title={title}
          content={content}
          createdAt={createdAt}
        />
      );
    });

  return (
    <Notice
      prevPage={prevPage}
      nextPage={nextPage}
      page={page}
      cardTemp={cardTemp}
      isLoading={isLoading}
    />
  );
});

export default NoticeContainer;
