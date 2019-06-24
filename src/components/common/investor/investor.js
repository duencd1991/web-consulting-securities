import React from "react";
import PropTypes from "prop-types";
import "./investor.scss";

const investor = props => {
  return (
    <div className="investor">
      <img alt="img" src={props.img} />
      <div className="title">{props.title}</div>
      <div className="detail">{props.detail}</div>
    </div>
  );
};
investor.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
  detail: PropTypes.string
};
export default investor;
