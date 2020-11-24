import React, { useEffect, useCallback, useState } from 'react';
import useStores from 'lib/hooks/useStores';
import { observer } from 'mobx-react';
import MainNotice from 'components/Main/MainNotice/MainNotice';
const MainNoticeContainer = observer(() => {
  const { store } = useStores();
  const { handleLatestNotice } = store.NoticeStore;
  const [res, setRes] = useState({});

  const requestHandleLatestNotice = useCallback(async () => {
    await handleLatestNotice().then((res) => {
      setRes(res);
    });
  }, [handleLatestNotice]);

  useEffect(() => {
    requestHandleLatestNotice();
  }, [requestHandleLatestNotice]);

  return <MainNotice res={res} />;
});

export default MainNoticeContainer;
