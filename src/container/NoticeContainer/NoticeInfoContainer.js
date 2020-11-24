import React, { useCallback, useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import NoticeInfo from 'components/Notice/NoticeInfo';
import useStores from 'lib/hooks/useStores';
import { useParams } from 'react-router-dom';

const NoticeInfoContainer = observer(() => {
  const { idx } = useParams();
  const { store } = useStores();
  const [detailRes, setDetailRes] = useState({});

  const { handleNoticeDetail, isLoading } = store.NoticeStore;

  const requestHandleNoticeDetail = useCallback(async () => {
    const res = await handleNoticeDetail(idx);
    setDetailRes(res);
  }, [handleNoticeDetail, idx]);

  useEffect(() => {
    if (idx) {
      requestHandleNoticeDetail();
    }
  }, [idx, requestHandleNoticeDetail]);

  return <NoticeInfo detailRes={detailRes} isLoading={isLoading} />;
});

export default NoticeInfoContainer;
