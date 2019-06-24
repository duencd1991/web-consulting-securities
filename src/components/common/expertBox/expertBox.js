import React from "react";
import PropTypes from "prop-types";
import "./expertBox.scss";
import icNoImg from "../../../assets/img/ic_no_img2.png";

const expertBox = props => {
  return (
    <div className="expert-box">
      <div className="expert-specialized">{props.specialized}</div>
      <div className="group-experts">
        {props.list.map((expert, index) => {
          return (
            <div key={index} className="expert-detail">
              <img alt="img" src={expert.img ? props.img : icNoImg} />
              <div className="expert-info">
                <div className="name">{expert.name}</div>
                <div className="title">{expert.title}</div>
                <div className="detail">{expert.detail}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
expertBox.propTypes = {
  specialized: PropTypes.string,
  list: PropTypes.array,
  img: PropTypes.string
};
export default expertBox;
