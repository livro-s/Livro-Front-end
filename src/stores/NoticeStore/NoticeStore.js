import { getResponse } from 'lib/Axios';
import { observable, action } from 'mobx';
import { autobind } from 'core-decorators';
import { getToken } from 'lib/util/Token';
@autobind
class NoticeStore {
  @observable NoticeLength;

  @action
  handleLatestNotice = async () => {
    try {
      const { data } = await getResponse('/notice/latest', getToken());

      return data;
    } catch (err) {
      return err;
    }
  };

  @action
  handleNoticePage = async (page) => {
    try {
      const { data } = await getResponse(`/notice?page=${page}`, getToken());
      this.NoticeLength = data.length;
      return data;
    } catch (err) {
      return err;
    }
  };

  @action
  handleNoticeDetail = async (idx) => {
    try {
      const { data } = await getResponse(`/notice/${idx}`, getToken());
      console.log(data);
      return data;
    } catch (err) {
      return err;
    }
  };
}

export default NoticeStore;
