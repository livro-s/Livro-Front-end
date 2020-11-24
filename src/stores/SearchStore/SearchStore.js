import { autobind } from 'core-decorators';
import { getResponse, postRequest } from 'lib/Axios';
import { getToken } from 'lib/util/Token';
import { observable, action } from 'mobx';

@autobind
class SearchStore {
  @observable searchList = [];
  @observable isLoading = false;

  @action
  handleResetList = () => {
    this.searchList = [];
  }

  @action
  handleSearchBooks = async (keyword, page = 1) => {
    try {
      this.isLoading = true;
      this.searchList = [];
      const { data } = await getResponse(`/book?search=${keyword}&page=${page}`, getToken());
      const { book } = data;
      this.searchList = book;
      this.isLoading = false;

      return data;
    } catch (error) { 
      this.isLoading = false;
      throw error;
    }
  }

  @action
  handleLoanBook = async (request) => {
    try {
      this.isLoading = true;
      const data = await postRequest('/book/loan', request, getToken());
      this.isLoading = false;

      return data;
    } catch (error) {
      this.isLoading = false;
      throw error;
    }
  }
};

export default SearchStore;