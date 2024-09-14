import React from 'react';
import cl from '../inputs/myInputs.module.css';

const MyInputs = React.forwardRef((props, ref) => {
  return <input ref={ref} className={cl.input} {...props} />;
});

export default MyInputs;
