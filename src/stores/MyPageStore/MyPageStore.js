import { autobind } from 'core-decorators';
import { getResponse } from 'lib/Axios';
import { getToken } from 'lib/util/Token';
import { observable, action } from 'mobx';

@autobind
class MyPageStore {
  @observable isLoading = true;
  @observable LoanBookList = [];
  @observable User = [];

  @action
  handleBookList = async () => {
    try {
      this.isLoading = true;
      const { data } = await getResponse(`/user/loans`, getToken());
      this.LoanBookList = data;
      this.isLoading = false;

      return data;
    } catch (error) {
      this.isLoading = false;
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