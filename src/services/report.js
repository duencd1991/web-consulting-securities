import request from '../utils/request';

const list = ( start, limit, type) => {
  let url = `/report/list/get?start=${start}&limit=${limit}&type=${type}`;
  return request({
    url: url,
    method: 'get'
  });
};
const updateViews = ( id ) => {
  let url = `/report/upViews?id=${id}`;
  return request({
    url: url,
    method: 'put'
  });
};
export { list, updateViews };