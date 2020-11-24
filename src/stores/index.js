import AuthStore from './AuthStore';
import SearchStore from './SearchStore';
import NoticeStore from './NoticeStore';

const stores = {
  AuthStore: new AuthStore(),
  SearchStore: new SearchStore(),
  NoticeStore: new NoticeStore(),
};

export default stores;
