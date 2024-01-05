import React from 'react';
import './styles.scss';

const ActionButton = ({ legend, handleClick, className, type = 'btn' }) => {

  return (
    <div className="action-button">
    <a href="d" className={` btn ${className}`} onClick={handleClick}>
      {legend}
    </a>
    </div>
  );
};

export default ActionButton;