import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '../../layout/layout';
import { toast } from 'react-toastify';
import { TYPE_NEWS } from '../../../utils/constant';
import '../../../style/common.scss';
import './formNews.scss';
import actions from '../../../store/news/actions';
import notifyActions from '../../../store/notification/actions';

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class FormNews extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      categoryId: 1,
      thumbnail: '',
      content: '',
      views: 0,

      update: false,
      validate: true,
      validateUploadImage: ""
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
        title: detail.title,
        categoryId: detail.categoryId,
        thumbnail: detail.imgUrl,
        content: detail.content,
        views: detail.views
      })
    }
    if (nextProps.message !== '' && nextProps.message !== this.props.message) {
      toast(nextProps.message);
      if (nextProps.success) {
        this.props.history.push(`/list-news`);
      }
      this.props.clearNotify();
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onChangeFile = (e) => {
    var imageDisplayArea = document.getElementById('imageDisplayArea');
    var file = e.target.files[0];
    var imageType = /image.*/;
    if (file.type.match(imageType)) {
      var reader = new FileReader();
      reader.onload = function(e) {
        imageDisplayArea.innerHTML = "";
        var img = new Image();
        img.src = reader.result;
        imageDisplayArea.appendChild(img);
      }
      reader.readAsDataURL(file);	
      this.setState({
        thumbnail: file
      })
    } else {
      imageDisplayArea.innerHTML = "Vui lòng tải hình ảnh!";
    }
  }

  onSelectCategoryId = (e) => {
    this.setState({
      categoryId: TYPE_NEWS[e.target.selectedIndex].type
    })
  }
  onChangeEditor = (data) => {
    this.setState({
      content: data
    })
  }
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
          imgUrl: state.thumbnail
        }
        this.props.updateNews(data);
      } else {
        let data = new FormData();
        data.append('views', encodeURI(state.name));
        data.append('title', state.title);
        data.append('content', state.content);
        data.append('categoryId', state.categoryId);
        data.append('imgUrl', state.thumbnail);
        this.props.createNews(data);
      }
    }
  }
  onValidateForm = () => {
    const {
      title,
      categoryId,
      thumbnail,
      content,
    } =  this.state;
    let check = title !== '' && categoryId !== 0 && thumbnail !== '' && content !== '';
    this.setState({
      validate: check
    })
    return check;
  }

  render() {
    const {
      title,
      thumbnail,
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
    return(
      <Layout>
        <div className='admin-form'>
          {
            update ? <h1>Cập nhật tin tức</h1> : <h1>Tạo mới tin tức</h1>
          }
          <div className="form-group">
            <label>Tiêu đề</label>
            <input type="text" className="form-control" id="title" name='title' value={title} onChange={this.onChange} />
            {
              !validate && title === '' && <div className="alert alert-warning" role="alert">
                Vui lòng nhập thông tin
              </div>
            }
          </div>
          <div className="form-group">
            <label>Danh mục</label>
            <select className="form-control" id="categorySelect" onChange={this.onSelectCategoryId}>
              {
                TYPE_NEWS.map((item, index) => {
                  return <option key={index} value={item.type === categoryId ? "selected" : ""} >{item.name}</option>  
                })
              }
            </select>
          </div>
          <div className="form-group">
            <label>Hình ảnh</label>
            <div className="custom-file">
              <input type="file" className="custom-file-input" id="thumbnail" onChange={this.onChangeFile}/>
              <label className="custom-file-label" >Chọn hình ảnh</label>
            </div>
            {
              validateUploadImage !== "" && <div className="alert alert-warning" role="alert">
                {
                  validateUploadImage
                }
              </div>
            }
            <div id="imageDisplayArea"></div>
            {
              !validate && thumbnail === null && <div className="alert alert-warning" role="alert">
                Vui lòng nhập thông tin
              </div>
            }
          </div>
          
          <div className="form-group">
            <label>Nội dung</label>
            <CKEditor
              name='content'
              data={content ? content : ''}
              editor={ ClassicEditor }
              onChange={( event, editor ) => {
                const data = editor.getData();
                this.onChangeEditor(data);
              }}
            />
            {
              !validate && content === '' && <div className="alert alert-warning" role="alert">
                Vui lòng nhập thông tin
              </div>
            }
          </div>

          <button className="btn btn-save" onClick={this.onSubmit}>Lưu</button>
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
    updateNews: (data) => {
      dispatch(actions.updateNews(data));
    },
    createNews: (data) => {
      dispatch(actions.createNews(data));
    },
    getDetail: (id) => {
      dispatch(actions.getDetail(id));
    },
    clearNotify: () => {
      dispatch(notifyActions.clearNotify());
    }
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(FormNews);