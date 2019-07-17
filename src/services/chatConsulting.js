import request from "../utils/request";
const createChat = data => {
  const url = `/chat/create`;
  return request({
    url: url,
    method: "post",
    data: data
  });
};
const updateChat = data => {
  const url = `/chat/update`;
  return request({
    url: url,
    method: "put",
    data: data
  });
};
const listChat = data => {
  const url = `/chat/list/get`;
  return request({
    url: url,
    method: "get",
    params: data
  });
};
export { createChat, updateChat, listChat };
