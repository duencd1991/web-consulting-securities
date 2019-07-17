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
    method: "put",
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
const deleteExpert = data => {
  const url = `/expert/delete`;
  return request({
    url: url,
    method: "delete",
    params: data
  });
};
export { createExpert, updateExpert, listExpert, expertDetail, deleteExpert };
