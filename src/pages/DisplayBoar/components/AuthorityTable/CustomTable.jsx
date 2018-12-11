import React, { Component } from 'react';
import { Table, Pagination, Balloon, Icon } from '@icedesign/base';
import Operation from '../../../../api/api';

const {displaypig} = Operation;


export default class Home extends Component {
  static displayName = 'Home';

  constructor(props) {
    super(props);
    this.state = {
      current: 1,
      dataSource: [],
    };
  }
  componentWillMount = async() =>{
    let result = await displaypig();
    this.setState({
      dataSource : result
    })
  }

  renderOper = () => {
    return (
      <div style={styles.oper}>
        <Icon type="edit" size="small" style={styles.editIcon} />
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
          />
          <Table.Column width={100} title="品种" dataIndex="breed" />
          <Table.Column width={100} title="栋栏" dataIndex="column" />
          <Table.Column width={100} title="圈号" dataIndex="ringNumber" />
          <Table.Column width={200} title="本周配种" dataIndex="MatingWeek" />
          <Table.Column width={200} title="备注" dataIndex="remarks" />
          <Table.Column width={200} title="操作" dataIndex="operation" />
          <Table.Column
            width={100}
            title="编辑/删除"
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
