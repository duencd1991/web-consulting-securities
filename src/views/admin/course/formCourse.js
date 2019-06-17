import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '../../layout/layout';
import { toast } from 'react-toastify';
import { TYPE_COURSE, CATEGORY_COURSE, PRIORITY_COURSE } from '../../../utils/constant';
import '../../../style/common.scss';
import actions from '../../../store/trainingService/actions';
import notifyActions from '../../../store/notification/actions';
import icDownload from '../../../assets/img/ic-download.png';

class FormCourse extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      teacher: '',
      type: TYPE_COURSE[0].type,
      file: '',
      startDate: '',
      endDate: '',
      schedule: '',
      address: '',
      description: '',
      fee: 0,
      category: CATEGORY_COURSE[0].cat,
      priority: PRIORITY_COURSE[0].index,

      url: '',
      update: false,
      validate: true
    }
  }
  componentDidMount() {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    if (id) {
      this.setState({
        id: id,
        update: true
      })
      this.props.getDetail(id);
    } else {
      this.setState({
        update: false
      })
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.detail) {
      const detail = nextProps.detail;
      this.setState({
        name: detail.name,
        teacher: detail.teacher,
        type: detail.type,
        url: detail.url,
        startDate: detail.startDate,
        endDate: detail.endDate,
        schedule: detail.schedule,
        address: detail.address,
        description: detail.description,
        fee: detail.fee,
        category: detail.category,
        priority: detail.priority,
      })
    }
    if (nextProps.message !== '' && nextProps.message !== this.props.message) {
      toast(nextProps.message);
      if (nextProps.success) {
        this.props.history.push(`/list-course`);
      }
      this.props.clearNotify();
    }
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onChageFile = (e)=>{
    this.setState({
      file: e.target.files[0]
    })
  }
  onRemoveFile = () => {
    this.setState({
      file: null
    })
  }
  onChangeDate = (e) => {
    if (e.target.value) {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  }
  onSelectCategory = (e) => {
    this.setState({
      category: CATEGORY_COURSE[e.target.selectedIndex].cat
    })
  }
  onSelectType = (e) => {
    this.setState({
      type: TYPE_COURSE[e.target.selectedIndex].type
    })
  }
  onSelectPriority = (e) => {
    this.setState({
      priority: PRIORITY_COURSE[e.target.selectedIndex].index
    })
  }
  onSubmit = () => {
    if (this.onValidateForm()) {
      const state = this.state;
      if (state.update) {
        const data = {
          id: state.id,
          name: state.name,
          teacher: state.teacher,
          type: state.type,
          startDate: state.startDate,
          endDate: state.endDate,
          schedule: state.schedule,
          address: state.address,
          description: state.description,
          fee: state.fee,
          category: state.category,
          priority: state.priority
        }
        this.props.updateCourse(data);
      } else {
        let data = new FormData();
        data.append('name', encodeURI(state.name));
        data.append('teacher', state.teacher);
        data.append('type', state.type);
        data.append('file', state.file);
        data.append('startDate', state.startDate);
        data.append('endDate', state.endDate);
        data.append('schedule', state.schedule);
        data.append('address', state.address);
        data.append('description', state.description);
        data.append('fee', state.fee);
        data.append('category', state.category);
        data.append('priority', state.priority);
        this.props.createCourse(data);
      }
    }
  }
  onValidateForm = () => {
    const {
      name,
      teacher,
      type,
      file,
      startDate,
      endDate,
      schedule,
      address,
      description,
      fee,
      category,
      priority,
      update
    } =  this.state;
    let check = name !== ''
      && teacher !== ''
      && type !== ''
      && startDate !== ''
      && endDate !== ''
      && schedule !== ''
      && description !== ''
      && fee !== ''
      && category !== ''
      && priority !== '';
    if (!update) {
      check = check && file !== '';
    }
    this.setState({
      validate: check
    })
    return check;
  }

  render() {
    const {
      name,
      teacher,
      type,
      file,
      startDate,
      endDate,
      schedule,
      address,
      description,
      fee,
      category,
      priority,
      
      url,
      update,
      validate
    } = this.state;
    
    return(
      <Layout>
        <div className='admin-form'>
          {
            update ? <h1>Cập nhật khóa học</h1> : <h1>Tạo mới khóa học</h1>
          }
          <div className="form-group">
            <label>Tiêu đề</label>
            <input type="text" className="form-control" id="name" name='name'
              value={name} onChange={this.onChange} />
            {
              !validate && name === '' && <div className="alert alert-warning" role="alert">
                Vui lòng nhập thông tin
              </div>
            }
          </div>
          <div className="form-group">
            <label>Hình thức học</label>
            <select className="form-control" id="categorySelect" onChange={this.onSelectType}>
              {
                TYPE_COURSE.map((item, index) => {
                  return <option key={index} value={item.type === type ? "selected" : ""} >{item.name}</option>  
                })
              }
            </select>
            {
              !validate && type === '' && <div className="alert alert-warning" role="alert">
                Vui lòng nhập thông tin
              </div>
            }
          </div>
          <div className="form-group">
            <label>Phân loại</label>
            <select className="form-control" id="categorySelect" onChange={this.onSelectCategory}>
              {
                CATEGORY_COURSE.map((item, index) => {
                  return <option key={index} value={item.cat === category ? "selected" : ""} >{item.name}</option>  
                })
              }
            </select>
            {
              !validate && category === '' && <div className="alert alert-warning" role="alert">
                Vui lòng nhập thông tin
              </div>
            }
          </div>
          <div className="form-group">
            <label>Độ ưu tiên</label>
            <select className="form-control" id="categorySelect" onChange={this.onSelectPriority}>
              {
                PRIORITY_COURSE.map((item, index) => {
                  return <option key={index} value={item.index === priority ? "selected" : ""} >{item.name}</option>  
                })
              }
            </select>
            {
              !validate && priority === '' && <div className="alert alert-warning" role="alert">
                Vui lòng nhập thông tin
              </div>
            }
          </div>
          <div className="form-group">
            <label>Lịch học</label>
            <input type="text" className="form-control" id="schedule" name='schedule' value={schedule} onChange={this.onChange} />
            {
              !validate && schedule === '' && <div className="alert alert-warning" role="alert">
                Vui lòng nhập thông tin
              </div>
            }
          </div>
          <div className="form-group">
            <label>Ngày khai giảng</label>
            <input type="text" className="form-control datepicker-here" data-language='en'
                data-date-format="dd-mm-yyyy" id="startDate" name="startDate" value={startDate} onBlur={this.onChangeDate}/>
            {
              !validate && startDate === '' && <div className="alert alert-warning" role="alert">
                Vui lòng nhập thông tin
              </div>
            }
          </div>
          <div className="form-group">
            <label>Ngày kết thúc</label>
            <input type="text" className="form-control datepicker-here" data-language='en'
                data-date-format="dd-mm-yyyy" id="endDate" name="endDate" value={endDate} onBlur={this.onChangeDate}/>
            {
              !validate && endDate === '' && <div className="alert alert-warning" role="alert">
                Vui lòng nhập thông tin
              </div>
            }
          </div>
          <div className="form-group">
            <label>Mô tả chi tiết</label>
            <input type="text" className="form-control" id="description" name='description'
              value={description} onChange={this.onChange} />
            {
              !validate && description === '' && <div className="alert alert-warning" role="alert">
                Vui lòng nhập thông tin
              </div>
            }
          </div>
          <div className="form-group">
            <label>Địa chỉ</label>
            <input type="text" className="form-control" id="address" name='address'
              value={address} onChange={this.onChange} />
            {
              !validate && address === '' && <div className="alert alert-warning" role="alert">
                Vui lòng nhập thông tin
              </div>
            }
          </div>
          <div className="form-group">
            <label>Học phí</label>
            <input type="text" className="form-control" id="fee" name='fee'
              value={fee} onChange={this.onChange} />
            {
              !validate && fee === '' && <div className="alert alert-warning" role="alert">
                Vui lòng nhập thông tin
              </div>
            }
          </div>
          <div className="form-group">
            <label>Giảng viên</label>
            <input type="text" className="form-control" id="teacher" name='teacher'
              value={teacher} onChange={this.onChange} />
            {
              !validate && teacher === '' && <div className="alert alert-warning" role="alert">
                Vui lòng nhập thông tin
              </div>
            }
          </div>

          {
            update ? <div className="form-group">
                <label>File đính kèm</label>
                <a href={url} target="_blank" rel='noopener noreferrer' className='file-attach' >
                  <img src={icDownload} alt='img'/>
                </a>
              </div>
            : <div className="form-group">
              <label>File đính kèm</label>
              <div className="custom-file">
                <input type="file" className="custom-file-input" id="customFile" onChange={this.onChageFile}/>
                <label className="custom-file-label" >Chọn file</label>
              </div>
              {
                file && <div className='uploaded-file'>
                  <div className='file-name'>{file.name}</div>
                  <div className='file-size'>{`${file.size / 1000} KB`}</div>
                  <i className="far fa-times-circle" onClick={this.onRemoveFile}></i>
                </div>
              }
              {
                !validate && file === null && <div className="alert alert-warning" role="alert">
                  Vui lòng nhập thông tin
                </div>
              }
            </div>
          }
          <button className="btn btn-save" onClick={this.onSubmit}>Lưu</button>
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
    updateCourse: (data) => {
      dispatch(actions.updateCourse(data));
    },
    createCourse: (data) => {
      dispatch(actions.createCourse(data));
    },
    getDetail: (id) => {
      dispatch(actions.getDetail(id));
    },
    clearNotify: () => {
      dispatch(notifyActions.clearNotify());
    }
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(FormCourse);