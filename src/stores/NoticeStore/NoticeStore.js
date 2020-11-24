import { getResponse } from 'lib/Axios';
import { observable, action } from 'mobx';
import { autobind } from 'core-decorators';
import { getToken } from 'lib/util/Token';
@autobind
class NoticeStore {
  @observable NoticeLength;
  @observable isLoading = false;

  @action
  handleLatestNotice = async () => {
    try {
      this.isLoading = true;
      const { data } = await getResponse('/notice/latest', getToken());
      this.isLoading = false;

      return data;
    } catch (err) {
      this.isLoading = false;

      return err;
    }
  };

  @action
  handleNoticePage = async (page) => {
    try {
      this.isLoading = true;
      const { data } = await getResponse(`/notice?page=${page}`, getToken());
      this.isLoading = false;
      this.NoticeLength = data.length;

      return data;
    } catch (err) {
      this.isLoading = false;

      return err;
    }
  };

  @action
  handleNoticeDetail = async (idx) => {
    try {
      this.isLoading = true;
      const { data } = await getResponse(`/notice/${idx}`, getToken());
      this.isLoading = false;

      return data;
    } catch (err) {
      this.isLoading = false;

      return err;
    }
  };
}

export default NoticeStore;
