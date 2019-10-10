import React from 'react';
import './Todotemplate.scss';

const Todotemplate = ({ children, key }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">일정 관리</div>
      <div className="content">{children}</div>
    </div>
  );
}

export default Todotemplate;