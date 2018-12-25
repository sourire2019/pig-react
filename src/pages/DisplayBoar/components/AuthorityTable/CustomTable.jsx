import React, { Component } from 'react';
import { Table, Dialog, Button } from '@icedesign/base';
import IceIcon from '@icedesign/icon';
import Operation from '../../../../api/api';

const QRCode = require('qrcode.react');

const { displaypig } = Operation;


export default class Home extends Component {
  static displayName = 'Home';

  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      dialog: false,
      earId: '',
    };
  }
  componentWillMount = async () => {
    const result = await displaypig();
    const athis = this;
    if (result != null) {
      athis.setState({
        dataSource: result,
      });
    }
  }

  printf = (index) => {
    const id = this.state.dataSource[index].erc721ID.toString();
    this.setState({ dialog: true, earId: id });
  }
  renderOper = (record, index) => {
    return (
      <div style={styles.oper}>
        <IceIcon size="small" type="eye" style={styles.editIcon} onClick={() => { this.printf(index); }} />
      </div>
    );
  };
  hideDialog = () => {
    this.setState({
      dialog: false,
    });
  };
  download = () => {
    const canvas = document.querySelector('.HpQrcode > canvas');
    this.downloadRef.href = canvas.toDataURL();
    this.downloadRef.download = `${this.state.earId}.png`;
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
          <Table.Column width={200} title="链码" dataIndex="erc721ID" />
          <Table.Column width={200} title="耳号" dataIndex="earId" />
          <Table.Column width={100} title="品种" dataIndex="breed" />
          <Table.Column width={100} title="栋栏" dataIndex="column" />
          <Table.Column width={100} title="圈号" dataIndex="ringNumber" />
          <Table.Column width={100} title="本周配种" dataIndex="matingWeek" />
          <Table.Column width={100} title="备注" dataIndex="remarks" />
          {/* <Table.Column width={100} title="操作" dataIndex="operation" /> */}
          <Table.Column
            width={100}
            title="查看二维码"
            cell={this.renderOper}
            align="center"
          />
        </Table>
        <Dialog
          className="simple-form-dialog"
          style={{ width: '200px' }}
          autoFocus
          footerAlign="center"
          title="查看二维码"
          onClose={this.hideDialog}
          isFullScreen
          visible={this.state.dialog}
        >
          <div className="HpQrcode">
            <QRCode size={150} value={this.state.earId} />
          </div>
          <div style={{ marginTop: '20px' }}>
            <Button type="primary" onClick={this.download}>
              <a ref={(ref) => { this.downloadRef = ref; }}>
                下载
              </a>
            </Button>
            <Button onClick={this.hideDialog}>
              关闭
            </Button>
          </div>
        </Dialog>
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
