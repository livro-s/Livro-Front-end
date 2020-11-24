import { observable, action } from 'mobx';
import { autobind } from 'core-decorators';
import { postRequest } from 'lib/Axios';
@autobind
class AuthStore {
  @action
  handleLogin = async (request) => {
    try {
      const data = await postRequest('/user/', request);
      return data;
    } catch (err) {
      throw err;
    }
  };

  @action
  handleRegister = async (request) => {
    try {
      const data = await postRequest('/user/new/', request);
      console.log(data);
      return data;
    } catch (err) {
      throw err;
    }
  };
}

export default AuthStore;
