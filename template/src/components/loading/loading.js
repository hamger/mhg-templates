import './loading.less';

const Loading = isShow => (
  <div className={isShow ? 'loading-wrap active' : 'loading-wrap'}>
    <div className="load-item" />
    <div className="load-item" />
  </div>
);

export default Loading;
