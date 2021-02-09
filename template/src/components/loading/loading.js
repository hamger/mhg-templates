import React from 'react';

const Loading = ({ isShow }) => (
  <div>
    {isShow ? '加载中' : ''}
  </div>
);

export default Loading;
