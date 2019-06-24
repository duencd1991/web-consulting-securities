import request from "../utils/request";
const createAccountTrading = data => {
  const url = `/accountTrading/create`;
  return request({
    url: url,
    method: "post",
    data: data
  });
};
const listAccountTrading = data => {
  const url = `/accountTrading/list/get`;
  return request({
    url: url,
    method: "get",
    params: data
  });
};
const accountTradingDetail = data => {
  const url = `/accountTrading/detail`;
  return request({
    url: url,
    method: "get",
    params: data
  });
};
export { createAccountTrading, listAccountTrading, accountTradingDetail };
