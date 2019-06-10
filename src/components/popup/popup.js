import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import './popup.scss';
const popup = props => {
  const { t } = useTranslation();
  return (
    <div className="popup">
      <div className="popup-wrapper rounded bg-white position-relative">
        <div className="popup-header mb-2 text-center">{props.title || t('notification')}</div>
        <div className="popup-body mb-2 text-center">{props.children}</div>
        <div className="popup-footer text-center">
          <button type="button" onClick={props.showPopup} className="mclose w100">
            {props.closeText || t('close')}
          </button>
        </div>
      </div>
    </div>
  );
};
popup.propTypes = {
  showPopup: PropTypes.func,
  children: PropTypes.node,
  title: PropTypes.string,
  closeText: PropTypes.string
};
export default popup;