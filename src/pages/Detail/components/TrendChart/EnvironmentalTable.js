import React, { Component } from 'react';
import { Table } from '@icedesign/base';

export default class EnvironmentalTable extends Component {
  static displayName = 'EnvironmentalTable';
  constructor(props) {
    super(props);
    this.state = {
      dataSource: props.value,
    };
  }
  componentWillReceiveProps(nextProps) {

    this.setState({
      dataSource: nextProps.value,
    });
  }
  render() {
    const { dataSource } = this.state;
    return (
      <div style={styles.tableContainer}>
        <Table
          dataSource={dataSource}
          onSort={this.handleSort}
          hasBorder={false}
          className="custom-table"
        >
          <Table.Column width={100} title="时间" dataIndex="datetime" />
          <Table.Column width={100} title="二氧化碳(CO2)" dataIndex="co2" />
          <Table.Column width={100} title="温度(temperature)" dataIndex="temperature" />
          <Table.Column width={100} title="湿度(humidity)" dataIndex="humidity" />
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
