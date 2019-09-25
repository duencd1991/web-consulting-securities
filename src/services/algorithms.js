import request from "../utils/request";
const createAlgorithm = data => {
  const url = `/algorithm/create`;
  return request({
    url: url,
    method: "post",
    data: data
  });
};
const updtaeAlgorithm = data => {
  const url = `/algorithm/update`;
  return request({
    url: url,
    method: "post",
    data: data
  });
};
const listAlgorithm = data => {
  const url = `/algorithm/list/get`;
  return request({
    url: url,
    method: "get",
    params: data
  });
};
const detailAlgorithm = data => {
  const url = `/algorithm/detail`;
  return request({
    url: url,
    method: "get",
    params: data
  });
};
export { createAlgorithm, updtaeAlgorithm, listAlgorithm, detailAlgorithm };
