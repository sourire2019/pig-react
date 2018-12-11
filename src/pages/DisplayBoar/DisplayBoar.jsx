import React, { Component } from 'react';
import AuthorityTable from './components/AuthorityTable';
import cookie from 'react-cookies';
export default class DisplayBoar extends Component {
  static displayName = 'DisplayBoar';

  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount () {
    let result = cookie.load("status");

    if(result != 1){
      window.location.href = window.location.origin + '/#/login'
    }
  }
  render() {
    return (
      <div className="display-boar-page">
        <AuthorityTable />
      </div>
    );
  }
}
