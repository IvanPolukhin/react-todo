import React from 'react';
import cl from '../buttons/myButtons.module.css';

const MyButtons = ({ children, type, onClick }) => {
  return (
    <button onClick={onClick} className={`${cl.btn} ${cl[type]}`}>
      {children}
    </button>
  );
};

export default MyButtons;
