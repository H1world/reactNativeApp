const base = 'http://104.224.160.73:8888';

const request = async (path) => {
  const res = await fetch(path);
  const json = await res.json();
  return json;
};

export default class Api {
  static getBannerAction() {
    return request(`${base}/banner`);
  }
}
