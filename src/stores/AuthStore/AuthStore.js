import { observable, action } from 'mobx';
import { autobind } from 'core-decorators';
import { postRequest } from 'lib/Axios';
@autobind
class AuthStore {
  @observable isLaoding = false;

  @action
  handleLogin = async (request) => {
    try {
      this.isLaoding = true;
      const data = await postRequest('/user/', request);
      this.isLaoding = false;

      return data;
    } catch (err) {
      this.isLaoding = false;

      throw err;
    }
  };

  @action
  handleRegister = async (request) => {
    try {
      this.isLaoding = true;
      const data = await postRequest('/user/new/', request);
      this.isLaoding = false;

      return data;
    } catch (err) {
      this.isLaoding = false;

      throw err;
    }
  };
}

export default AuthStore;
