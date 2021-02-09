import React from "react";
import s from './none.module.less'

const None = () => {
  return (
    <div className={s['wraper-none']}>
    {/* <div className='wraper-none'> */}
      <img src={require('static/none.png')} alt="404" />
      <div>这个页面飞走了~</div>
    </div>
  );
};

export default None