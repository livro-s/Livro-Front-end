import React, { useCallback } from 'react';
import { observer } from 'react-mobx';
import NoticeInfo from 'components/Notice/NoticeInfo';
import useStores from 'lib/hooks/useStores';

const NoticeInfoContainer = observer(() => {
  const { store } = useStores();
  const { handleNoticeDetail } = store.NoticeStore;

  const requestHandleNoticeDetail = useCallback(async () => {
    const res = await handleNoticeDetail(id);
  });

  return <NoticeInfo />;
});
