import React, { Component } from "react";
import { connect } from "react-redux";
import Layout from "../../layout/layout";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { TYPE_GUIDELINE } from "../../../utils/constant";
import "../../../style/common.scss";
import actions from "../../../store/tradingInstruction/actions";
import notifyActions from "../../../store/notification/actions";
import icDownload from "../../../assets/img/ic-download.png";

class FormGuideline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      type: "",
      file: "",
      content: "",
      date: "",

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
        id: detail.id,
        name: detail.name,
        type: detail.type,
        url: detail.url,
        content: detail.content,
        views: detail.views
      });
    }
    if (nextProps.message !== "" && nextProps.message !== this.props.message) {
      toast(nextProps.message);
      if (nextProps.success) {
        this.props.history.push(`/list-guideline`);
      }
      this.props.clearNotify();
    }
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSelectType = e => {
    this.setState({
      type: TYPE_GUIDELINE[e.target.selectedIndex].type
    });
  };
  onChageFile = e => {
    this.setState({
      file: e.target.files[0]
    });
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
          views: state.views,
          content: state.content,
          url: state.url,
          type: state.type
        };
        this.props.update(data);
      } else {
        const data = new FormData();
        data.append("name", encodeURI(state.name));
        data.append("type", state.type);
        data.append("content", state.content);
        data.append("file", state.file);
        this.props.create(data);
      }
    }
  };
  onValidateForm = () => {
    const { name, type, file, content, update } = this.state;
    let check = name !== "" && type !== "" && content !== "";
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
      type,
      file,
      content,
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
                <a href="#">Danh mục</a>
              </li>
              <li className="breadcrumb-item">
                <a href="list-guideline">Quản lý hướng dẫn</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Tạo mới hướng dẫn
              </li>
            </ol>
          </nav>
          {update ? (
            <h1>Cập nhật hướng dẫn</h1>
          ) : (
            <h1 className="titleNewRe">Tạo mới hướng dẫn</h1>
          )}
          <hr></hr>
          <div className="form-group row">
            <label className="col-sm-3 padding0">Tiêu đề</label>
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
            <label className="col-sm-3 padding0">Danh mục</label>
            <div className="col-sm-9 padding0">
              <select
                className="form-control"
                id="selectType"
                onChange={this.onSelectType}
              >
                {TYPE_GUIDELINE.map((item, index) => {
                  return (
                    <option
                      key={index}
                      selected={item.type === type ? "selected" : ""}
                    >
                      {item.title}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 padding0">Hướng dẫn chi tiết</label>
            <div className="col-sm-9 padding0">
              <textarea
                rows="4"
                type="text"
                className="form-control"
                id="content"
                name="content"
                value={content}
                onChange={this.onChange}
              />
              {!validate && content === "" && (
                <div className="alert alert-warning" role="alert">
                  Vui lòng nhập thông tin
                </div>
              )}
            </div>
          </div>
          {update ? (
            <div className="form-group row">
              <label className="col-sm-3 padding0">File đính kèm</label>
              <div className="col-sm-9 padding0">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="file-attach"
                >
                  <img src={icDownload} alt="img" />
                </a>
              </div>
            </div>
          ) : (
            <div className="form-group row">
              <label className="col-sm-3 padding0">File đính kèm</label>

              <div className="col-sm-9 padding0">
                <input
                  type="file"
                  className="custom-file-input"
                  id="customFile"
                  onChange={this.onChageFile}
                />
                <label className="custom-file-label">Chọn file</label>

                {file && (
                  <div className="uploaded-file">
                    <div className="file-name">{file.name}</div>
                    <div className="file-size">{`${file.size /
                      1000} KB`}</div>
                    <i
                      className="far fa-times-circle"
                      onClick={this.onRemoveFile}
                    ></i>
                  </div>
                )}
                {!validate && file === null && (
                  <div className="alert alert-warning" role="alert">
                    Vui lòng nhập thông tin
                  </div>
                )}
              </div>
            </div>
          )}
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
    detail: state.GuideLines.detail,
    success: state.Notifys.success,
    message: state.Notifys.message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    update: data => {
      dispatch(actions.updateGuideline(data));
    },
    create: data => {
      dispatch(actions.createGuideline(data));
    },
    getDetail: data => {
      dispatch(actions.getDetail(data));
    },
    clearNotify: () => {
      dispatch(notifyActions.clearNotify());
    }
  };
};

FormGuideline.propTypes = {
  getDetail: PropTypes.func,
  history: PropTypes.func,
  clearNotify: PropTypes.func,
  update: PropTypes.func,
  create: PropTypes.func,
  detail: PropTypes.object,
  message: PropTypes.string,
  success: PropTypes.string
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormGuideline);
