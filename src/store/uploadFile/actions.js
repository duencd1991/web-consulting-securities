const actions = {
  GET_UPLOAD_FILE: "GET_UPLOAD_FILE",
  FILE_UPLOAD: "FILE_UPLOAD",
  uploadFile: data => ({
    type: actions.GET_UPLOAD_FILE,
    data
  })
};
export default actions;
