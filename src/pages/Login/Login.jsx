import React, { Component } from 'react';
import UserLogin from './components/UserLogin';
import './Login.scss';

export default class Login extends Component {
  static displayName = 'Login';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="login-page">
        <UserLogin />
      </div>
    );
  }
}
