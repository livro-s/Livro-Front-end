import AuthStore from './AuthStore';
import SearchStore from './SearchStore';
import MyPageStore from './MyPageStore';

const stores = {
  AuthStore: new AuthStore(),
  SearchStore: new SearchStore(),
  MyPageStore: new MyPageStore()
};

export default stores;
