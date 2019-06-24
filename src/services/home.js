import request from "../utils/request";

const listNews = () => {
  const url = `/news/list/home/get`;
  return request({
    url: url,
    method: "get"
  });
};
const listReports = () => {
  const url = `/report/list/home/get`;
  return request({
    url: url,
    method: "get"
  });
};
const listGuidelines = () => {
  const url = `/guideline/list/home/get`;
  return request({
    url: url,
    method: "get"
  });
};
export { listNews, listGuidelines, listReports };
