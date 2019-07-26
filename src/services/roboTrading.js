import request from "../utils/request";

const listRobo = data => {
  return request({
    url: "/trading/list/get",
    method: "get",
    params: data
  });
};
const changeStatus = data => {
  return request({
    url: "/trading/changeStatus",
    method: "put",
    params: data
  });
};
const createRobo = data => {
  return request({
    url: "/trading/create",
    method: "post",
    data: data
  });
};
const updateRobo = data => {
  const url = "/trading/update";
  return request({
    url: url,
    method: "put",
    data: data
  });
};
export { listRobo, createRobo, updateRobo, changeStatus };
