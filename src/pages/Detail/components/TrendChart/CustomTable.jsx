import React, { Component } from 'react';
import { Table } from '@icedesign/base';

export default class Home extends Component {
  static displayName = 'Home';

  constructor(props) {
    super(props);
    this.state = {
      dataSource:[],
      value : {}
    };
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    this.setState({
      dataSource: nextProps.value,
      value : {
        value : [
          {temperature :Math.floor((Math.random() * ((9999999999999 - 1000000000000) + 1)) + 1000000000000),
          datetime : '12445'}
        ]
        }
    });
  }
  render() {s
    console.log(this.state.dataSource)  
    return (
      <div style={styles.tableContainer}>
        <Table
          dataSource={this.state.value.value}
          hasBorder={false}
          className="custom-table"
        >
          <Table.Column width={100} title="时间" dataIndex="datetime" />
          <Table.Column width={100} title="体温" dataIndex="temperature" />
        </Table>
      </div>
    );
  }
}

const styles = {
  tableContainer: {
    background: '#fff',
    paddingBottom: '10px',
  },
  pagination: {
    margin: '20px 0',
    textAlign: 'center',
  },
  editIcon: {
    color: '#999',
    cursor: 'pointer',
  },
  circle: {
    display: 'inline-block',
    background: '#28a745',
    width: '8px',
    height: '8px',
    borderRadius: '50px',
    marginRight: '4px',
  },
  stateText: {
    color: '#28a745',
  },
};
