import React, { useCallback, useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import NoticeInfo from 'components/Notice/NoticeInfo';
import useStores from 'lib/hooks/useStores';
import { useParams } from 'react-router-dom';

const NoticeInfoContainer = observer(() => {
  const { idx } = useParams();
  const { store } = useStores();
  const { handleNoticeDetail } = store.NoticeStore;
  const [detailRes, setDetailRes] = useState({});
  const requestHandleNoticeDetail = useCallback(async () => {
    const res = await handleNoticeDetail(idx);
    setDetailRes(res);
  }, [handleNoticeDetail, idx]);

  useEffect(() => {
    if (idx) {
      requestHandleNoticeDetail();
    }
  }, [idx, requestHandleNoticeDetail]);
  return <NoticeInfo detailRes={detailRes} />;
});

export default NoticeInfoContainer;
