import React, { Component } from 'react';
import { Button, Input, Select } from '@icedesign/base';

export default class TableFilter extends Component {
  static displayName = 'TableFilter';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={styles.tableFilter}>
        <div style={styles.title}>猪舍记录</div>
      </div>
    );
  }
}

const styles = {
  tableFilter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px',
    marginBottom: '20px',
    background: '#fff',
  },
  title: {
    height: '20px',
    lineHeight: '20px',
    color: '#333',
    fontSize: '18px',
    fontWeight: 'bold',
    paddingLeft: '12px',
    borderLeft: '4px solid #666',
  },
  filter: {
    display: 'flex',
  },
  filterItem: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '20px',
  },
  filterLabel: {
    fontWeight: '500',
    color: '#999',
  },
  submitButton: {
    marginLeft: '20px',
  },
};
