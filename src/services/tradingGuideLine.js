import request from "../utils/request";

const listTop = (start, limit) => {
  const url = `/guideline/list/get?start=${start}&limit=${limit}`;
  return request({
    url: url,
    method: "get"
  });
};
const listType = (start, limit, type) => {
  const url = `/guideline/list/get?start=${start}&limit=${limit}&type=${type}`;
  return request({
    url: url,
    method: "get"
  });
};
const updateViews = id => {
  const url = `/guideline/upViews?id=${id}`;
  return request({
    url: url,
    method: "put"
  });
};
export { listTop, listType, updateViews };
