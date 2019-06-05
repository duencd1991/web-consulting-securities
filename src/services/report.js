import request from '../utils/request';

const list = ( start, limit, type) => {
  let url = '';
  if (type) {
    url = `/report/list/get?start=${start}&limit=${limit}&type=${type}`;
  } else {
    url = `/report/list/get?start=${start}&limit=${limit}`;
  }
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
const createReport = ( data ) => {
  let url = `/report/create`;
  return request({
    url: url,
    method: 'post',
    data: data
  });
};
const updateReport = ( data ) => {
  let url = `/report/update`;
  return request({
    url: url,
    method: 'put',
    data: data
  });
};
const reportDetail = (id) => {
  let url = `/report/detail?id=${id}`
  return request({
    url: url,
    method: 'get'
  })
}
export { list, updateViews, createReport, updateReport, reportDetail }