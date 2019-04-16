import request from '../utils/request';

const list = (searchKey, start, limit) => {
  let url = '';
  if (searchKey) {
    url = `/robot/room/list?searchKey=${searchKey}&start=${start}&limit=${limit}`;
  } else {
    url = `/robot/room/list?start=${start}&limit=${limit}`;
  }
  return request({
    url: url,
    method: 'get'
  });
};
const get = id => {
  return request({
    url: `/robot/room/detail?id=${id}`,
    method: 'get'
  });
};
const create = (body) => {
  return request({
    url: `/robot/room/create`,
    data: body,
    method: 'post'
  });
};
const update = (body) => {
  return request({
    url: `/robot/room/update`,
    data: body,
    method: 'post'
  });
};
const changeStatus = (id, status) => {
  return request({
    url: `/robot/room/changeStatus?id=${id}&status=${status}`,
    method: 'post'
  });
}
export { list, get, create, update, changeStatus };
