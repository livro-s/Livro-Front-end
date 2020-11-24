import AuthStore from './AuthStore';
import SearchStore from './SearchStore';

const stores = {
  AuthStore: new AuthStore(),
  SearchStore: new SearchStore(),
};

export default stores;
