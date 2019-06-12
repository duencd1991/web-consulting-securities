import React from 'react';
import { Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import './registerPopup.scss';
const RegisterPopup = props => {
  // const { t } = useTranslation();
  return (
    <div className="popup-register">
      <Modal show={props.isShowModal} onHide={props.closePopup} dialogClassName="popup-wrapper">
        <Modal.Header>
          <div className="popup-header mb-2 text-center">
            đăng ký học  <a onClick={props.closePopup} className="mclose w100"><i className="fa fa-times"></i></a>
          </div>
        </Modal.Header>
        <Modal.Body className="popup-body">
          <div className="txtCourse">Khóa học: {props.courseInfo ? props.courseInfo.name : ''}</div>
          <div className="infoMoreCourse">Thời gian: <b className='txtBlue'>{props.courseInfo ? props.courseInfo.schedule : ''} </b>  Khai giảng: <b className='txtBlue'>{props.courseInfo ? props.courseInfo.startDate : ''} </b> Chi phí: <b className='txtBlue'>{props.courseInfo ? props.courseInfo.fee : ''}</b> </div>
          <form class="form-detail" action="#" method="post" id="myform">
            <div class="form-row">
              <label for="your_fullname">Họ và tên</label>
              <input type="text" name="your_fullname" id="your_fullname" class="input-text" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" />
            </div>
            <div class="form-row">
              <label for="your_tel">Số điện thoại</label>
              <input type="text" name="your_tel" id="your_tel" class="input-text" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" />
            </div>
            <div class="form-row">
              <label for="your_email">Email</label>
              <input type="text" name="your_email" id="your_email" class="input-text" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" />
            </div>
            <div class="form-row">
              <label for="your_addr">Địa chỉ</label>
              <input type="text" name="your_addr" id="your_addr" class="input-text" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" />
            </div>
            <div class="form-row">
              <label for="your_nameAcc">Tên tài khoản</label>
              <input type="text" name="your_nameAcc" id="your_nameAcc" class="input-text" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" />
            </div>
            <div class="form-row-last">
              <button className='register'>
                <span>Đăng ký học</span>
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};
RegisterPopup.propTypes = {
  showPopup: PropTypes.func,
  title: PropTypes.string,
  closeText: PropTypes.string,
  courseInfo: PropTypes.object
};
export default RegisterPopup;