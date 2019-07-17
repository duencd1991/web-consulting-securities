import request from "../utils/request";

const listTop = data => {
  const url = "/guideline/list/get";
  return request({
    url: url,
    method: "get",
    params: data
  });
};
const listType = data => {
  const url = "/guideline/list/get";
  return request({
    url: url,
    method: "get",
    params: data
  });
};
const updateViews = data => {
  const url = "/guideline/upViews";
  return request({
    url: url,
    method: "put",
    params: data
  });
};
const listGuideline = data => {
  const url = `/guideline/list/get`;
  return request({
    url: url,
    method: "get",
    params: data
  });
};
const create = data => {
  const url = `/guideline/create`;
  return request({
    url: url,
    method: "post",
    data: data
  });
};
const update = data => {
  const url = `/guideline/update`;
  return request({
    url: url,
    method: "put",
    data: data
  });
};
const detail = data => {
  const url = `/guideline/detail`;
  return request({
    url: url,
    method: "get",
    params: data
  });
};
const deleteGuideline = data => {
  const url = `/guideline/delete`;
  return request({
    url: url,
    method: "delete",
    params: data
  });
};
export { listTop, listType, updateViews, listGuideline, create, update, detail, deleteGuideline };
