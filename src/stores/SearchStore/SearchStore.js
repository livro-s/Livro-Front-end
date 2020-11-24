import { autobind } from 'core-decorators';
import { getResponse, postRequest } from 'lib/Axios';
import { getToken } from 'lib/util/Token';
import { observable, action } from 'mobx';

@autobind
class SearchStore {
  @observable searchList = [];

  @action
  handleResetList = () => {
    this.searchList = [];
  }

  @action
  handleSearchBooks = async (keyword) => {
    try {
      this.searchList = [];
      const { data } = await getResponse(`/book?search=${keyword}`);
      this.searchList = data;

      return data;
    } catch (error) { 
      throw error;
    }
  }

  @action
  handleLoanBook = async (request) => {
    try {
      const data = await postRequest('/book/loan', request, getToken());
      return data;
    } catch (error) {
      throw error;
    }
  }
};

export default SearchStore;