import { observable, action } from 'mobx';
import { autobind } from 'core-decorators';
import { postRequest } from 'lib/Axios';
@autobind
class AuthStore {
  @observable isLoading = false;

  @action
  handleLogin = async (request) => {
    try {
      this.isLoading = true;
      const data = await postRequest('/user/', request);
      this.isLoading = false;

      return data;
    } catch (err) {
      this.isLoading = false;

      throw err;
    }
  };

  @action
  handleRegister = async (request) => {
    try {
      this.isLoading = true;
      const data = await postRequest('/user/new/', request);
      this.isLoading = false;

      return data;
    } catch (err) {
      this.isLoading = false;

      throw err;
    }
  };
}

export default AuthStore;
