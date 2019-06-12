import request from '../utils/request';
const createAccountTrading = (data) => {
  let url = `/accountTrading/create`
  return request({
    url: url,
    method: 'post',
    data: data
  })
}
export { createAccountTrading }