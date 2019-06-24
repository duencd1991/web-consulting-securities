import request from "../utils/request";

const listCourse = (start, limit, type, category, priority) => {
  let url = `/course/list/get?start=${start}&limit=${limit}`;
  if (type) {
    url += `&type=${type}`;
  }
  if (category) {
    url += `&category=${category}`;
  }
  if (priority) {
    url += `&priority=${priority}`;
  }
  return request({
    url: url,
    method: "get"
  });
};
const listCourseHot = priority => {
  const url = `/course/list/get?start=0&limit=5&priority=${priority}`;
  return request({
    url: url,
    method: "get"
  });
};
const listCourseTop = type => {
  const url = `/course/list/get?start=0&limit=5&type=${type}`;
  return request({
    url: url,
    method: "get"
  });
};
const listCourseCategory = category => {
  const url = `/course/list/get?start=0&limit=5&category=${category}`;
  return request({
    url: url,
    method: "get"
  });
};
const createCourse = data => {
  const url = `/course/create`;
  return request({
    url: url,
    method: "post",
    data: data
  });
};
const updateCourse = data => {
  const url = `/course/update`;
  return request({
    url: url,
    method: "put",
    data: data
  });
};
const courseDetail = id => {
  const url = `/course/detail?id=${id}`;
  return request({
    url: url,
    method: "get"
  });
};
const registerCourse = data => {
  const url = `/course/register/create`;
  return request({
    url: url,
    method: "post",
    data: data
  });
};
const registerCourseList = data => {
  const url = `/course/register/list/get`;
  return request({
    url: url,
    method: "get",
    params: data
  });
};
const registerCourseDetail = data => {
  const url = `/course/register/detail`;
  return request({
    url: url,
    method: "get",
    params: data
  });
};
export {
  listCourse,
  listCourseHot,
  listCourseTop,
  listCourseCategory,
  createCourse,
  updateCourse,
  courseDetail,
  registerCourse,
  registerCourseList,
  registerCourseDetail
};
