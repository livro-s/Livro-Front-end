import { autobind } from 'core-decorators';
import { getResponse } from 'lib/Axios';
import { observable, action } from 'mobx';

@autobind
class SearchStore {
  @observable searchList = [];

  @action
  handleSearchBooks = async (keyword) => {
    try {
      const response = await getResponse(`/book?search=${keyword}`);
      this.searchList = response.data.books;

      return response;
    } catch (error) { 
      throw error;
    }
  }
};

export default SearchStore;