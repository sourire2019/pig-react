import React, { Component } from 'react';
import cookie from 'react-cookies';
import ProjectOverview from './components/ProjectOverview';
import TopActiveChart from './components/ProjectOverview/TopActiveChart';


export default class Home extends Component {
  static displayName = 'Home';

  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    const result = cookie.load('status');

    if (result != 1) {
      window.location.href = `${window.location.origin}/#/login`;
    }
  }
  render() {
    return (
      <div className="home-page">
        <ProjectOverview />
        <TopActiveChart />
      </div>
    );
  }
}
