import { autobind } from 'core-decorators';
import { getResponse } from 'lib/Axios';
import { observable, action } from 'mobx';

@autobind
class SearchStore {
  @observable searchList = [];

  @action
  handleSearchBooks = async (keyword) => {
    try {
      const { data } = await getResponse(`/book?search=${keyword}`);
      this.searchList = data.data.books;

      return data;
    } catch (error) { 
      throw error;
    }
  }
};

export default SearchStore;