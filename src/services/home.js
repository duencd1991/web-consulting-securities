import request from '../utils/request';

const listNews = () => {
  let url = `/news/list/home/get`;
  return request({
    url: url,
    method: 'get'
  });
};
const listReports = () => {
  let url = `/report/list/home/get`;
  return request({
    url: url,
    method: 'get'
  });
};
const listGuidelines = () => {
  let url = `/guideline/list/home/get`;
  return request({
    url: url,
    method: 'get'
  });
};
export { listNews, listGuidelines, listReports };
