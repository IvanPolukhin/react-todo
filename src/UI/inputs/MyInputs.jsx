import React, { forwardRef } from 'react';
import cl from '../inputs/myInputs.module.css';

const MyInputs = forwardRef((props, ref) => {
  return <input ref={ref} className={cl.input} {...props} />;
});

export default MyInputs;
