import React, { Component } from 'react';
import AuthorityTable from './components/AuthorityTable';


export default class DisplayBoar extends Component {
  static displayName = 'DisplayBoar';

  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="display-boar-page">
        <AuthorityTable />
      </div>
    );
  }
}
