import { observable, action, runInAction } from 'mobx';
import Api from '../api/Api.js';

export default class HomeStore {
  @observable banner = [];

  @action('fectch banner api')
  getBanner = async () => {
    const res = Api.getBannerAction();
    runInAction(() => {
      this.banner = res.banner;
    });
  }
}
