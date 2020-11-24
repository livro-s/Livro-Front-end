import AuthStore from './AuthStore';
import SearchStore from './SearchStore';
import MyPageStore from './MyPageStore';
import NoticeStore from './NoticeStore';

const stores = {
  AuthStore: new AuthStore(),
  SearchStore: new SearchStore(),
  MyPageStore: new MyPageStore(),
  NoticeStore: new NoticeStore()
};

export default stores;
