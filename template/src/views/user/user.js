import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import actions from '../../store/actions/index';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'hello World',
    };
  }

  add() {
    const { dispatch } = this.props;
    dispatch(actions.user.addCount);
  }

  sub() {
    const { dispatch } = this.props;
    dispatch(actions.user.subCount);
  }

  render() {
    const { text } = this.state;
    const { user } = this.props;
    const { count } = user;
    return (
      <div className="user-wrap">
        <div className="user-avatar" />
        <div className="user-nickname">{text}</div>
        <div>这里放一个计数器用来练习redux</div>
        <div>{count}</div>
        <div className="btn" onClick={this.add.bind(this)}>
          点我加一
        </div>
        <div className="btn" onClick={this.sub.bind(this)}>
          点我减一
        </div>
        <Link to="/test">跳转到 test 页面</Link>
      </div>
    );
  }
}

export default connect(state => ({ user: state.user }))(User);
