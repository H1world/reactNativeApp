const base = 'http://104.224.160.73:8888';
// const tzqApi = 'http://192.168.1.214:9199/tzq/';
const tzqApi = 'http://test.xytzq.cn:9199/tzq/';


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

export default class tzqApi {
  
}