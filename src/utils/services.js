import { TYPE_PERMISSION } from "./constant";
const persist = JSON.parse(localStorage.getItem("persist:root"));
let userInfo = {
  profile: {}
};
if (persist && persist.Users) {
  userInfo = JSON.parse(persist.Users);
}
const isLogin = () => {  
  return userInfo.profile.username;
};
const isAdmin = () => {
  return userInfo.profile.permissionId === TYPE_PERMISSION.ADMIN
}
const isCustomerCare = () => {
  return userInfo.profile.permissionId === TYPE_PERMISSION.CUSTOMERCARE
}
const isExpert = () => {
  return userInfo.profile.permissionId === TYPE_PERMISSION.EXPERT
}
export { isLogin, isAdmin, isCustomerCare, isExpert };