import React, { Component } from "react";
import { connect } from "react-redux";
import Layout from "../../layout/layout";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import "../../../style/common.scss";
import actions from "../../../store/algorithm/actions";
import notifyActions from "../../../store/notification/actions";

class FormAlgorithm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      author: "",
      signal: "",
      apply: "",
      desc: "",
      image: "",

      url: "",
      update: false,
      validate: true
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
        id: detail.id,
        name: detail.name,
        author: detail.author,
        signal: detail.signal,
        apply: detail.apply,
        desc: detail.desc,
        url: detail.url
      });
    }
    if (nextProps.message !== "" && nextProps.message !== this.props.message) {
      toast(nextProps.message);
      if (nextProps.success) {
        this.props.history.push(`/list-algorithm`);
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
        image: file
      });
    } else {
      imageDisplayArea.innerHTML = "Vui lòng tải hình ảnh!";
    }
  };
  
  onSubmit = () => {
    if (this.onValidateForm()) {
      const state = this.state;
      if (state.update) {
        const data = {
          id: state.id,
          name: state.name,
          author: state.author,
          signal: state.signal,
          apply: state.apply,
          desc: state.desc,
          url: state.url
        };
        this.props.updateAlgorithm(data);
      } else {
        const data = new FormData();
        data.append("name", encodeURI(state.name));
        data.append("author", encodeURI(state.author));
        data.append("signal", encodeURI(state.signal));
        data.append("apply", encodeURI(state.apply));
        data.append("desc", encodeURI(state.desc));
        data.append("image", state.image);
        this.props.createAlgorithm(data);
      }
    }
  };
  onValidateForm = () => {
    const {
      name,
      author,
      signal,
      apply,
      desc,
      image,
      update
    } = this.state;
    let check =
      name !== "" &&
      author !== "" &&
      signal !== "" &&
      apply !== "" &&
      desc !== "";
    if (!update) {
      check = check && image !== "";
    }
    this.setState({
      validate: check
    });
    return check;
  };

  render() {
    const {
      name,
      author,
      signal,
      apply,
      desc,
      image,

      url,
      update,
      validate
    } = this.state;

    return (
      <Layout>
        <div className="admin-form">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <span>Danh mục</span>
              </li>
              <li className="breadcrumb-item">
                <a href="list-algorithm">Quản lý thuật toán</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Tạo mới thuật toán
              </li>
            </ol>
          </nav>
          {update ? (
            <h1>Cập nhật thuật toán</h1>
          ) : (
            <h1 className="titleNewRe">Tạo mới thuật toán</h1>
          )}
          <hr></hr>
          <div className="form-group row">
            <label className="col-sm-3 padding0">Tên</label>
            <div className="col-sm-9 padding0">
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={name}
                onChange={this.onChange}
              />
              {!validate && name === "" && (
                <div className="alert alert-warning" role="alert">
                  Vui lòng nhập thông tin
                </div>
              )}
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 padding0">Nhà phát triển</label>
            <div className="col-sm-9 padding0">
              <input
                type="text"
                className="form-control"
                id="author"
                name="author"
                value={author}
                onChange={this.onChange}
              />
              {!validate && author === "" && (
                <div className="alert alert-warning" role="alert">
                  Vui lòng nhập thông tin
                </div>
              )}
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 padding0">Bộ tín hiệu</label>
            <div className="col-sm-9 padding0">
              <input
                type="text"
                className="form-control"
                id="signal"
                name="signal"
                value={signal}
                onChange={this.onChange}
              />
              {!validate && signal === "" && (
                <div className="alert alert-warning" role="alert">
                  Vui lòng nhập thông tin
                </div>
              )}
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 padding0">Áp dụng</label>
            <div className="col-sm-9 padding0">
              <input
                type="text"
                className="form-control"
                id="apply"
                name="apply"
                value={apply}
                onChange={this.onChange}
              />
              {!validate && apply === "" && (
                <div className="alert alert-warning" role="alert">
                  Vui lòng nhập thông tin
                </div>
              )}
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 padding0">Mô tả chi tiết</label>
            <div className="col-sm-9 padding0">
              <textarea
                rows="4"
                type="text"
                className="form-control"
                id="desc"
                name="desc"
                value={desc}
                onChange={this.onChange}
              />
              {!validate && desc === "" && (
                <div className="alert alert-warning" role="alert">
                  Vui lòng nhập thông tin
                </div>
              )}
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-3 padding0">Hình ảnh</label>
            {
              update ? <img src={url} alt="img-news" className="img-expert-detail"/> : <div className="col-sm-9 padding0">
                <input
                  type="file"
                  className="custom-file-input"
                  id="image"
                  onChange={this.onChangeFile}
                />
                <label className="custom-file-label">Chọn hình ảnh</label>
                <div id="imageDisplayArea"></div>
                {!validate && image === "" && (
                  <div className="alert alert-warning" role="alert">
                    Vui lòng nhập thông tin
                  </div>
                )}
              </div>
            }
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
    detail: state.TrainingService.detail,
    success: state.Notifys.success,
    message: state.Notifys.message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateAlgorithm: data => {
      dispatch(actions.updateAlgorithm(data));
    },
    createAlgorithm: data => {
      dispatch(actions.createAlgorithm(data));
    },
    getDetail: data => {
      dispatch(actions.algorithmDetail(data));
    },
    clearNotify: () => {
      dispatch(notifyActions.clearNotify());
    }
  };
};

FormAlgorithm.propTypes = {
  getDetail: PropTypes.func,
  clearNotify: PropTypes.func,
  updateAlgorithm: PropTypes.func,
  createAlgorithm: PropTypes.func,
  history: PropTypes.object,
  detail: PropTypes.object,
  message: PropTypes.string,
  success: PropTypes.string
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormAlgorithm);
