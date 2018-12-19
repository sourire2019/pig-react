import React, { Component } from 'react';
import { Table } from '@icedesign/base';
import Operation from '../../../../api/api';

const { displaypig } = Operation;

export default class Boar extends Component {
  static displayName = 'Boar';

  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
    };
  }


  componentWillReceiveProps(nextProps) {
    this.setState({
     dataSource : nextProps.value
    });
  }

  render() {
    return (
      <div style={styles.tableContainer}>
        <Table
          dataSource={this.state.dataSource}
          hasBorder={false}
          className="custom-table"
        >
          <Table.Column width={100} title="耳号" dataIndex="earId" />
          <Table.Column width={100} title="品种" dataIndex="breed" />
          <Table.Column width={100} title="圈号" dataIndex="ringNumber" />
          <Table.Column width={100} title="本周配种" dataIndex="matingWeek" />
          <Table.Column width={100} title="目前状态" dataIndex="status" cell={row => row?(row) : ("正常")}/>
          <Table.Column width={100} title="栋栏" dataIndex="column" />
          {/*<Table.Column width={100} title="操作" dataIndex="operation" />*/}
          <Table.Column width={100} title="备注" dataIndex="remarks" />
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
