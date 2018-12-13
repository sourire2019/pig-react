import React, { Component } from 'react';
import { Table } from '@icedesign/base';
import IceIcon from '@icedesign/icon';
import Operation from '../../../../api/api';

const { checkSelect } = Operation;

export default class Home extends Component {
  static displayName = 'Home';

  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
    };
  }
  componentWillMount = async () => {
    const result = await checkSelect();
    this.setState({
      dataSource: result,
    });
  }
  see = (index) => {
    const id = this.state.dataSource[index].earId.toString();
    window.location.href = `${window.location.origin}#/quickchech/show/detail?earId=${id}`;
  }
  renderOper = (record, index) => {
    return (
      <div style={styles.oper}>
        <IceIcon size="small" type="eye" style={styles.editIcon} onClick={() => { this.see(index); }} />
      </div>
    );
  };

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
          <Table.Column
            width={100}
            title="耳号"
            dataIndex="earId"
            align="center"
          />
          <Table.Column
            width={100}
            title="品种"
            dataIndex="breed"
            align="center"
          />
          <Table.Column
            width={100}
            title="栋栏"
            dataIndex="column"
            align="center"
          />
          <Table.Column
            width={100}
            title="圈号"
            dataIndex="ringNumber"
            align="center"
          />
          <Table.Column
            width={100}
            title="目前状态"
            dataIndex="status"
            cell={row => (row || ('正常'))}
            align="center"
          />
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
