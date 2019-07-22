import request from "../utils/request";

const list = (start, limit, type) => {
  let url = "";
  if (type) {
    url = `/report/list/get?start=${start}&limit=${limit}&type=${type}`;
  } else {
    url = `/report/list/get?start=${start}&limit=${limit}`;
  }
  return request({
    url: url,
    method: "get"
  });
};
const updateViews = id => {
  const url = `/report/upViews?id=${id}`;
  return request({
    url: url,
    method: "put"
  });
};
const createReport = data => {
  const url = `/report/create`;
  return request({
    url: url,
    method: "post",
    data: data
  });
};
const updateReport = data => {
  const url = `/report/update`;
  return request({
    url: url,
    method: "put",
    data: data
  });
};
const reportDetail = id => {
  const url = `/report/detail?id=${id}`;
  return request({
    url: url,
    method: "get"
  });
};
const deleteReport = data => {
  const url = `/report/delete`;
  return request({
    url: url,
    method: "delete",
    params: data
  });
};
export { list, updateViews, createReport, updateReport, reportDetail, deleteReport };
