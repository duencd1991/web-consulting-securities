import request from "../utils/request";
const createExpert = data => {
  const url = `/expert/create`;
  return request({
    url: url,
    method: "post",
    data: data
  });
};
const updateExpert = data => {
  const url = `/expert/update`;
  return request({
    url: url,
    method: "post",
    data: data
  });
};
const listExpert = data => {
  const url = `/expert/list/get`;
  return request({
    url: url,
    method: "get",
    params: data
  });
};
const expertDetail = data => {
  const url = `/expert/detail`;
  return request({
    url: url,
    method: "get",
    params: data
  });
};
export { createExpert, updateExpert, listExpert, expertDetail };
