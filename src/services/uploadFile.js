import request from "../utils/request";
const uploadFile = data => {
  const url = "/news/upload";
  return request({
    url: url,
    method: "post",
    data: data
  });
};

export {uploadFile}