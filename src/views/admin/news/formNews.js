import React, { Component } from "react";
import { connect } from "react-redux";
import Layout from "../../layout/layout";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { TYPE_NEWS } from "../../../utils/constant";
import "../../../style/common.scss";
import "./formNews.scss";
import actions from "../../../store/news/actions";
import notifyActions from "../../../store/notification/actions";

import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

class FormNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      categoryId: 1,
      file: "",
      content: "",
      views: 0,
      imgUrl: "",

      update: false,
      validate: true,
      validateUploadImage: ""
    };
  }

  componentDidMount() {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    if (id) {
      this.setState({
        id: id,
        update: true
      });
      this.props.getDetail({id: id});
    } else {
      this.setState({
        update: false
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.detail) {
      const detail = nextProps.detail;
      this.setState({
        title: detail.title,
        categoryId: detail.categoryId,
        imgUrl: detail.imgUrl,
        content: detail.content,
        views: detail.views
      });
    }
    if (nextProps.message !== "" && nextProps.message !== this.props.message) {
      toast(nextProps.message);
      if (nextProps.success) {
        this.props.history.push(`/list-news`);
      }
      this.props.clearNotify();
    }
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onChangeFile = e => {
    const imageDisplayArea = document.getElementById("imageDisplayArea");
    const file = e.target.files[0];
    const imageType = /image.*/;
    if (file.type.match(imageType)) {
      const reader = new FileReader();
      reader.onload = function() {
        imageDisplayArea.innerHTML = "";
        const img = new Image();
        img.src = reader.result;
        imageDisplayArea.appendChild(img);
      };
      reader.readAsDataURL(file);
      this.setState({
        file: file
      });
    } else {
      imageDisplayArea.innerHTML = "Vui lòng tải hình ảnh!";
    }
  };

  onSelectCategoryId = e => {
    this.setState({
      categoryId: TYPE_NEWS[e.target.selectedIndex].type
    });
  };
  onChangeEditor = data => {
    this.setState({
      content: data
    });
  };
  onSubmit = () => {
    if (this.onValidateForm()) {
      const state = this.state;
      if (state.update) {
        const data = {
          id: state.id,
          views: state.views,
          title: state.title,
          content: state.content,
          categoryId: state.categoryId,
          file: state.imgUrl
        };
        this.props.updateNews(data);
      } else {
        const data = new FormData();
        data.append("views", encodeURI(state.name));
        data.append("title", state.title);
        data.append("content", state.content);
        data.append("categoryId", state.categoryId);
        data.append("file", state.file);
        this.props.createNews(data);
      }
    }
  };
  onValidateForm = () => {
    const { title, categoryId, file, content, update } = this.state;
    let check =
      title !== "" && categoryId !== 0  && content !== "";
    if (!update) {
      check = check && file !== "";
    }
    this.setState({
      validate: check
    });
    return check;
  };

  render() {
    const {
      title,
      file,
      imgUrl,
      content,
      categoryId,
      update,
      validate,
      validateUploadImage
    } = this.state;

    // var cb = function() { return (new Date()).getTime() }
    // ClassicEditor.create(document.querySelector( '#editor' ), {
    //   simpleUpload: {
    //       uploadUrl: {url:'http://127.0.0.1/my-upload-endpoint', headers:{ 'x-header':'myhead', 'x-header-cb': cb } }
    //   }
    // })
    return (
      <Layout>
        <div className="admin-form">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <span>Danh mục</span>
              </li>
              <li className="breadcrumb-item">
                <a href="list-news">Quản lý kiến thức</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Tạo mới kiến thức
              </li>
            </ol>
          </nav>
          {update ? (
            <h1>Cập nhật kiến thức</h1>
          ) : (
            <h1 className="titleNewRe">Tạo mới kiến thức</h1>
          )}
          <hr></hr>
          <div className="form-group row">
            <label className="col-sm-3 padding0">Tiêu đề</label>
            <div className="col-sm-9 padding0">
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={title}
                onChange={this.onChange}
              />
              {!validate && title === "" && (
                <div className="alert alert-warning" role="alert">
                  Vui lòng nhập thông tin
                </div>
              )}
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 padding0">Danh mục</label>
            <div className="col-sm-9 padding0">
              <select
                className="form-control"
                id="categorySelect"
                onChange={this.onSelectCategoryId}
              >
                {TYPE_NEWS.map((item, index) => {
                  return (
                    <option
                      key={index}
                      selected={item.type === categoryId ? "selected" : ""}
                    >
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 padding0">Hình ảnh</label>
            {
              update ? <img src={imgUrl} alt="img-news" className="img-expert-detail"/> : <div className="col-sm-9 padding0">
                <input
                  type="file"
                  className="custom-file-input"
                  id="file"
                  onChange={this.onChangeFile}
                />
                <label className="custom-file-label">Chọn hình ảnh</label>
                {validateUploadImage !== "" && (
                  <div className="alert alert-warning" role="alert">
                    {validateUploadImage}
                  </div>
                )}
                <div id="imageDisplayArea"></div>
                {!validate && file === "" && (
                  <div className="alert alert-warning" role="alert">
                    Vui lòng nhập thông tin
                  </div>
                )}
              </div>
            }
          </div>

          <div className="form-group row">
            <label className="col-sm-3 padding0">Nội dung</label>
            <div className="col-sm-9 padding0">
              <CKEditor
                name="content"
                data={content ? content : ""}
                editor={ClassicEditor}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  this.onChangeEditor(data);
                }}
              />
              {!validate && content === "" && (
                <div className="alert alert-warning" role="alert">
                  Vui lòng nhập thông tin
                </div>
              )}
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-3 padding0"></div>
            <div className="col-sm-9 padding0">
              <button className="btn btn-save" onClick={this.onSubmit}>
                Lưu
              </button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    detail: state.News.detail,
    success: state.Notifys.success,
    message: state.Notifys.message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateNews: data => {
      dispatch(actions.updateNews(data));
    },
    createNews: data => {
      dispatch(actions.createNews(data));
    },
    getDetail: id => {
      dispatch(actions.getDetail(id));
    },
    clearNotify: () => {
      dispatch(notifyActions.clearNotify());
    }
  };
};
FormNews.propTypes = {
  createNews: PropTypes.func,
  updateNews: PropTypes.func,
  clearNotify: PropTypes.func,
  history: PropTypes.func,
  getDetail: PropTypes.func,
  detail: PropTypes.object,
  message: PropTypes.string,
  success: PropTypes.string
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormNews);
