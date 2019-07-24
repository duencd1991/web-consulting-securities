import React, { Component } from "react";
import { connect } from "react-redux";
import Layout from "../../layout/layout";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import "../../../style/common.scss";
import actions from "../../../store/expert/actions";
import notifyActions from "../../../store/notification/actions";

class FormExpert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      position: "",
      file: "",
      image: "",
      description: "",

      url: "",
      validateUploadImage: "",
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
      const data = {
        id: id
      };
      this.props.getDetail(data);
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
        name: detail.name,
        position: detail.position,
        image: detail.image,
        description: detail.description,
        url: detail.url
      });
    }
    if (nextProps.message !== "" && nextProps.message !== this.props.message) {
      toast(nextProps.message);
      if (nextProps.success) {
        this.props.history.push(`/list-expert`);
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
    this.setState({
      validateUploadImage: ""
    });
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
      this.setState({
        validateUploadImage: "Vui lòng tải hình ảnh!"
      });
    }
  };
  onRemoveFile = () => {
    this.setState({
      file: null
    });
  };
  onSubmit = () => {
    if (this.onValidateForm()) {
      const state = this.state;
      if (state.update) {
        const data = {
          id: state.id,
          name: state.name,
          position: state.position,
          description: state.description,
          url: state.url
        };
        this.props.updateExpert(data);
      } else {
        const data = new FormData();
        data.append("name", encodeURI(state.name));
        data.append("position", encodeURI(state.position));
        data.append("description", encodeURI(state.description));
        data.append("file", state.file);
        this.props.createExpert(data);
      }
    }
  };
  onValidateForm = () => {
    const { name, position, file, description, update } = this.state;
    let check = name !== "" && position !== "" && description !== "";
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
      name,
      position,
      file,
      description,
      url,

      validateUploadImage,
      update,
      validate
    } = this.state;

    return (
      <Layout>
        <div className="admin-form">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Danh mục</a>
              </li>
              <li className="breadcrumb-item">
                <a href="list-expert">Quản lý chuyên gia</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Tạo mới chuyên gia
              </li>
            </ol>
          </nav>
          {update ? (
            <h1>Cập nhật chuyên gia</h1>
          ) : (
            <h1 className="titleNewRe">Tạo mới chuyên gia</h1>
          )}
          <hr></hr>
          <div className="form-group row">
            <label className="col-sm-3 padding0">Họ tên</label>
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
            <label className="col-sm-3 padding0">Chức vụ</label>
            <div className="col-sm-9 padding0">
              <input
                type="text"
                className="form-control"
                id="position"
                name="position"
                value={position}
                onChange={this.onChange}
              />
              {!validate && position === "" && (
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
                id="description"
                name="description"
                value={description}
                onChange={this.onChange}
              />
              {!validate && description === "" && (
                <div className="alert alert-warning" role="alert">
                  Vui lòng nhập thông tin
                </div>
              )}
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 padding0">Hình ảnh</label>
            {update ? (
              <img className="img-expert-detail" alt="img-expert" src={url} />
            ) : (
              <div className="col-sm-9 padding0">
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
            )}
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
    detail: state.Expert.detail,
    success: state.Notifys.success,
    message: state.Notifys.message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getListExpert: data => {
      dispatch(actions.listExpert(data));
    },
    updateExpert: data => {
      dispatch(actions.updateExpert(data));
    },
    createExpert: data => {
      dispatch(actions.createExpert(data));
    },
    getDetail: data => {
      dispatch(actions.getDetail(data));
    },
    clearNotify: () => {
      dispatch(notifyActions.clearNotify());
    }
  };
};

FormExpert.propTypes = {
  getDetail: PropTypes.func,
  history: PropTypes.func,
  clearNotify: PropTypes.func,
  updateExpert: PropTypes.func,
  createExpert: PropTypes.func,
  getListExpert: PropTypes.func,
  detail: PropTypes.object,
  message: PropTypes.string,
  success: PropTypes.string
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormExpert);
