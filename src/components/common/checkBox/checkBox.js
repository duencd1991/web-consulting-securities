import React from "react";
import PropTypes from "prop-types";
import "./checkBox.scss";

const Checkbox = props => {
  return (
    <div className={props.disable ? "checkbox disable" : "checkbox"}>
      <input
        className="styled-checkbox"
        type="checkbox"
        checked={props.checked}
        id={`${props.id}-checkbox-${props.value}`}
        onChange={e => props.onChange(props.value, e.target.checked)}
      />
      <label htmlFor={`${props.id}-checkbox-${props.value}`}>
        {props.title} &nbsp;
      </label>
    </div>
  );
};
Checkbox.propTypes = {
  disable: PropTypes.bool,
  checked: PropTypes.bool,
  id: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  title: PropTypes.string
};

export default Checkbox;
