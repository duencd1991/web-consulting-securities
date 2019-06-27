import React, { Component } from "react";
import { connect } from "react-redux";
import Layout from "../../layout/layout";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { TYPE_REPORT } from "../../../utils/constant";
import "../../../style/common.scss";
import actions from "../../../store/reports/actions";
import notifyActions from "../../../store/notification/actions";
import icDownload from "../../../assets/img/ic-download.png";

class FormReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      selectedType: 1,
      views: 0,
      selectedFile: null,
      linkFile: "",

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
      this.props.getDetail(id);
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
        selectedType: detail.type,
        linkFile: detail.url,
        views: detail.views
      });
    }
    if (nextProps.message !== "" && nextProps.message !== this.props.message) {
      toast(nextProps.message);
      if (nextProps.success) {
        this.props.history.push(`/list-report`);
      }
      this.props.clearNotify();
    }
  }

  onChageFile = e => {
    this.setState({
      selectedFile: e.target.files[0]
    });
  };

  onRemoveFile = () => {
    this.setState({
      selectedFile: null
    });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSelectType = e => {
    this.setState({
      selectedType: TYPE_REPORT[e.target.selectedIndex].type
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
          type: state.selectedType
        };

        this.props.updateReport(data);
      } else {
        const data = new FormData();
        data.append("name", encodeURI(state.name));
        data.append("type", state.selectedType);
        data.append("file", state.selectedFile);

        this.props.createReport(data);
      }
    }
  };
  onValidateForm = () => {
    const { name, selectedType, selectedFile, update } = this.state;

    let check = name !== "" && selectedType !== 0;
    if (!update) {
      check = check && selectedFile !== null;
    }
    this.setState({
      validate: check
    });
    return check;
  };

  render() {
    const {
      name,
      selectedType,
      selectedFile,
      linkFile,

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
                <a href="/list-report">Quản lý báo cáo</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Tạo mới báo cáo
              </li>
            </ol>
          </nav>
          {update ? (
            <h1>Cập nhật báo cáo</h1>
          ) : (
            <h1 className="titleNewRe">Tạo mới báo cáo</h1>
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
                {TYPE_REPORT.map((item, index) => {
                  return (
                    <option
                      key={index}
                      selected={item.type === selectedType ? "selected" : ""}
                    >
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          {update ? (
            <div className="form-group row">
              <label className="col-sm-3 padding0">File đính kèm</label>
              <div className="col-sm-9 padding0">
                <a
                  href={linkFile}
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

                {selectedFile && (
                  <div className="uploaded-file">
                    <div className="file-name">{selectedFile.name}</div>
                    <div className="file-size">{`${selectedFile.size /
                      1000} KB`}</div>
                    <i
                      className="far fa-times-circle"
                      onClick={this.onRemoveFile}
                    ></i>
                  </div>
                )}
                {!validate && selectedFile === null && (
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

FormReport.propTypes = {
  getDetail: PropTypes.func,
  clearNotify: PropTypes.func,
  updateReport: PropTypes.func,
  createReport: PropTypes.func,
  history: PropTypes.func,
  message: PropTypes.string,
  success: PropTypes.string,
  detail: PropTypes.object
};

const mapStateToProps = state => {
  return {
    detail: state.Reports.detail,
    success: state.Notifys.success,
    message: state.Notifys.message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateReport: data => {
      dispatch(actions.updateReport(data));
    },
    createReport: data => {
      dispatch(actions.createReport(data));
    },
    getDetail: id => {
      dispatch(actions.getDetail(id));
    },
    clearNotify: () => {
      dispatch(notifyActions.clearNotify());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormReport);
