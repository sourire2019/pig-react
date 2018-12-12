import React, { Component } from 'react';
import AuthorityTable from './components/AuthorityTable';

export default class Pigsty extends Component {
  static displayName = 'Pigsty';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="pigsty-page">
        <AuthorityTable />
      </div>
    );
  }
}
