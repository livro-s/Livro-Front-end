import { autobind } from 'core-decorators';
import { getResponse } from 'lib/Axios';
import { getToken } from 'lib/util/Token';
import { observable, action } from 'mobx';

@autobind
class MyPageStore {
  @observable LoanBookList = [];
  @observable User = [];

  @action
  handleBookList = async () => {
    try {
      const { data } = await getResponse(`/user/loans`, getToken());
      this.LoanBookList = data;

      return data;
    } catch (error) { 
      throw error;
    }
  }

  @action
  handleUser = async () => {
    try {
      const { data } = await getResponse(`/user`, getToken());
      this.User = data;

      return data;
    } catch (error) { 
      throw error;
    }
  }
};

export default MyPageStore;