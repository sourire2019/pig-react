import React, { Component } from 'react';
import AuthorityTable from './components/AuthorityTable';

export default class Check extends Component {
  static displayName = 'Check';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="check-page">
        <AuthorityTable />
      </div>
    );
  }
}
