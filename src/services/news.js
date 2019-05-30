import request from '../utils/request';

const listNews = (start, limit, category) => {
  let url = `/news/list/get?start=${start}&limit=${limit}&categoryId=${category}`;
  return request({
    url: url,
    method: 'get'
  });
};
const listNewsHot = () => {
  let url = `/news/list/get?start=0&limit=5`;
  return request({
    url: url,
    method: 'get'
  });
};
const listNewsTop = () => {
  let url = `/news/list/get?start=0&limit=5`;
  return request({
    url: url,
    method: 'get'
  });
};
const updateViews = ( id ) => {
  let url = `/news/upViews?id=${id}`;
  return request({
    url: url,
    method: 'put'
  });
};
export { listNews, listNewsHot, listNewsTop, updateViews };
