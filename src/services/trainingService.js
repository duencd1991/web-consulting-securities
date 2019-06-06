import request from '../utils/request';

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
    method: 'get'
  });
};
const listCourseHot = (priority) => {
  let url = `/course/list/get?start=0&limit=5&priority=${priority}`
  return request({
    url: url,
    method: 'get'
  })
}
const listCourseTop = (type) => {
  let url = `/course/list/get?start=0&limit=5&type=${type}`
  return request({
    url: url,
    method: 'get'
  })
}
const listCourseCategory = (category) => {
  let url = `/course/list/get?start=0&limit=5&category=${category}`
  return request({
    url: url,
    method: 'get'
  })
}
const createCourse = (data) => {
  let url = `/course/create`
  return request({
    url: url,
    method: 'post',
    data: data
  })
}
const updateCourse = (data) => {
  let url = `/course/update`
  return request({
    url: url,
    method: 'put',
    data: data
  })
}
const courseDetail = (id) => {
  let url = `/course/detail?id=${id}`
  return request({
    url: url,
    method: 'get'
  })
}
export { listCourse, listCourseHot, listCourseTop, listCourseCategory, createCourse, updateCourse, courseDetail };