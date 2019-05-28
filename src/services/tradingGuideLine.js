import request from '../utils/request';

const listTop = ( start, limit) => {
  let url = `/guideline/list/get?start=${start}&limit=${limit}`;
  return request({
    url: url,
    method: 'get'
  });
};
const listType = (start, limit, type) => {
  let url = `/guideline/listtype`;
  return request({
    url: url,
    method: 'get'
  });
};
export { listTop, listType };
