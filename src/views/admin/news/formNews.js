import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '../../layout/layout';
import { toast } from 'react-toastify';
import { TYPE_NEWS } from '../../../utils/constant';
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
      selectedCategory: 1,
      thumbnail: '',
      content: '',
      views: 0,

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
        title: detail.title,
        selectedCategory: detail.categoryId,
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
  onSelectCategory = (index) => {
    this.setState({
      categoryId: index
    })
  }
  onChangeEditor = (data) => {
    this.setState({
      content: data
    })
  }
  onSubmit = () => {
    if (this.onValidateForm()) {
      if (this.state.update) {
        const data = {
          id: this.state.id,
          views: this.state.views,
          title: this.state.title,
          content: this.state.content,
          categoryId: this.state.selectedCategory,
          imgUrl: this.state.thumbnail
        }
        this.props.updateNews(data);
      } else {
        const data = {
          views: this.state.views,
          title: this.state.title,
          content: this.state.content,
          categoryId: this.state.selectedCategory,
          imgUrl: this.state.thumbnail
        }
        this.props.createNews(data);
      }
    }
  }
  onValidateForm = () => {
    const {
      title,
      selectedCategory,
      thumbnail,
      content,
    } =  this.state;
    let check = title !== '' && selectedCategory !== 0 && thumbnail !== '' && content !== '';
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
      update,
      validate
    } = this.state;
    return(
      <Layout>
        <div className='create-news-form'>
          {
            update ? <h1>Cập nhật tin tức</h1> : <h1>Tạo mới tin tức</h1>
          }
          <div className="form-group">
            <label>Tiêu đề:</label>
            <input type="text" className="form-control" id="title" name='title' value={title} onChange={this.onChange} />
            {
              !validate && title === '' && <div className="alert alert-warning" role="alert">
                Vui lòng nhập thông tin
              </div>
            }
          </div>
          <div className="form-group">
            <label>Danh mục</label>
            <select className="form-control" id="categorySelect">
              {
                TYPE_NEWS.map((item, index) => {
                  return <option key={index} onClick={(e) => this.onSelectCategory(item.type)}>{item.name}</option>  
                })
              }
            </select>
          </div>
          <div className="form-group">
            <label>Hình ảnh mẫu</label>
            <input type="text" className="form-control" name="thumbnail" value={thumbnail} onChange={this.onChange} />
            {
              !validate && thumbnail === '' && <div className="alert alert-warning" role="alert">
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