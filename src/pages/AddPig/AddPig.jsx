import React, { Component } from 'react';
import CreateActivityForm from './components/CreateActivityForm';

export default class AddPig extends Component {
  static displayName = 'AddPig';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="add-pig-page">
        <CreateActivityForm />
      </div>
    );
  }
}
