import request from '../utils/request';

const listNews = (start, limit) => {
  let url = `/news/list/get?start=${start}&limit=${limit}`;
  return request({
    url: url,
    method: 'get'
  });
};
const listNewsHot = () => {
  let url = `/news/list/get`;
  return request({
    url: url,
    method: 'get'
  });
};
const listNewsTop = () => {
  let url = `/news/list/get`;
  return request({
    url: url,
    method: 'get'
  });
};
export { listNews, listNewsHot, listNewsTop };
