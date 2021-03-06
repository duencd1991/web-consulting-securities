import request from "../utils/request";

const listNews = (start, limit, category) => {
  let url = "";
  if (category) {
    url = `/news/list/get?start=${start}&limit=${limit}&categoryId=${category}`;
  } else {
    url = `/news/list/get?start=${start}&limit=${limit}`;
  }
  return request({
    url: url,
    method: "get"
  });
};
const listNewsHot = () => {
  const url = `/news/list/get?start=0&limit=5`;
  return request({
    url: url,
    method: "get"
  });
};
const listNewsTop = () => {
  const url = `/news/list/get?start=0&limit=5`;
  return request({
    url: url,
    method: "get"
  });
};
const updateViews = data => {
  const url = `/news/upViews`;
  return request({
    url: url,
    method: "put",
    params: data
  });
};
const updateNews = data => {
  const url = `/news/update`;
  return request({
    url: url,
    method: "put",
    data: data
  });
};
const createNews = data => {
  const url = `/news/create`;
  return request({
    url: url,
    method: "post",
    data: data
  });
};
const newsDetail = data => {
  const url = `/news/detail`;
  return request({
    url: url,
    method: "get",
    params: data
  });
};
const newsDelete = data => {
  const url = `/news/delete`;
  return request({
    url: url,
    method: "delete",
    params: data
  });
};
export {
  listNews,
  listNewsHot,
  listNewsTop,
  updateViews,
  newsDetail,
  updateNews,
  createNews,
  newsDelete
};
