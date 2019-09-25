import request from "../utils/request";
const createUser = data => {
  const url = `/account/register`;
  return request({
    url: url,
    method: "post",
    data: data
  });
};
const updateUser = data => {
  const url = `/account/update`;
  return request({
    url: url,
    method: "put",
    data: data
  });
};
const deleteUser = data => {
  const url = `/account/delete`;
  return request({
    url: url,
    method: "delete",
    params: data
  });
};
const login = data => {
  const url = `/account/login`;
  return request({
    url: url,
    method: "post",
    data: data
  });
};
const listUser = data => {
  const url = `/account/list/get`;
  return request({
    url: url,
    method: "get",
    params: data
  });
};
const detailUser = data => {
  const url = `/account/detail`;
  return request({
    url: url,
    method: "get",
    params: data
  });
};
const changePass = data => {
  const url = `/account/changePass`;
  return request({
    url: url,
    method: "post",
    data: data
  });
};
const resetPass = data => {
  const url = `/account/resetPass`;
  return request({
    url: url,
    method: "get",
    params: data
  });
};

export { createUser, updateUser, deleteUser, listUser, detailUser, login, changePass, resetPass };