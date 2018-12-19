import React, { Component } from 'react';
import { Table } from '@icedesign/base';
import IceIcon from '@icedesign/icon';
import Operation from '../../../../api/api';

const { pigsty } = Operation;

export default class Home extends Component {
  static displayName = 'Home';
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
    };
  }

  componentWillMount = async () => {
    const result = await pigsty();
    this.setState({
      dataSource: result,
    });
  }
  showpigsty = (index) => {
    const id = this.state.dataSource[index].id.toString();
    window.location.href = `${window.location.origin}#/Piggery/pigsty/detail?Id=${id}`;
  }
  renderOper = (record, index) => {
    return (
      <div style={styles.oper}>
        <IceIcon size="small" type="eye" style={styles.editIcon} onClick={() => { this.showpigsty(index); }} />
      </div>
    );
  };

  render() {
    return (
      <div style={styles.tableContainer}>
        <Table
          dataSource={this.state.dataSource}
          hasBorder={false}
          className="custom-table"
        >
          <Table.Column width={200} title="编号" dataIndex="id" />
          <Table.Column width={200} title="栋栏" dataIndex="column" />
          <Table.Column width={200} title="圈号" dataIndex="ringNumber" />
          <Table.Column width={200} title="负责人" dataIndex="person" />
          <Table.Column width={200} title="数量" dataIndex="num" />
          <Table.Column width={200} title="类型" dataIndex="type" />
          <Table.Column
            width={100}
            title="操作"
            cell={this.renderOper}
            align="center"
          />
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
