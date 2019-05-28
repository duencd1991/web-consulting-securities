import request from '../utils/request';

const list = ( start, limit) => {
  let url = `/api/report/list?start=${start}&limit=${limit}`;
  return request({
    url: url,
    method: 'get'
  });
};
const updateViews = ( id, views) => {
  let url = `/api/updateViews?id=${id}&views=${views}`;
  return request({
    url: url,
    method: 'post'
  });
};
export { list, updateViews };