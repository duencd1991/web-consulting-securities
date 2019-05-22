import PropTypes from 'prop-types';
import React from 'react';
import icNoImg from '../../../assets/img/ic_no_img.png';
import './reviewBox.scss';

const reviewBox = props => {

  return(
    <div className='review-box'>
      <img alt='img' src={props.img ? props.img : icNoImg }/>
      <div className='reviewer'>{props.name}</div>
      <div className='title'>{props.title}</div>
      <div className='detail'>
        <span className='clQ1'></span><div className='desc'>{props.review}</div><span className='clQ2'></span></div>
    </div>
  );
}
reviewBox.propsTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  review: PropTypes.string
}
export default reviewBox;