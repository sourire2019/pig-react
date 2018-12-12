import React, { Component } from 'react';
import TrendChart from './components/TrendChart';

export default class Detail extends Component {
  static displayName = 'Detail';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="detail-page">
        <TrendChart />
      </div>
    );
  }
}
