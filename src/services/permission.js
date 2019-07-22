import request from "../utils/request";
const createPermission = data => {
  const url = `/permission/create`;
  return request({
    url: url,
    method: "post",
    data: data
  });
};
const updatePermission = data => {
  const url = `/permission/update`;
  return request({
    url: url,
    method: "put",
    data: data
  });
};
const listPermission = data => {
  const url = `/permission/list/get`;
  return request({
    url: url,
    method: "get",
    params: data
  });
};
const detailPermission = data => {
  const url = `/permission/detail`;
  return request({
    url: url,
    method: "get",
    params: data
  });
};

export { createPermission, updatePermission, listPermission, detailPermission };