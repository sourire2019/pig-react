import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Grid, Table, Progress } from '@icedesign/base';
import LintChart from './LineChart';
import Operation from '../../../../api/api';

const { displaypig } = Operation;
const { Row, Col } = Grid;

const ViewedProducts = [
  {
    id: 1,
    name: '瘦肉猪',
    amount: '38,600',
  },
  {
    id: 2,
    name: '肥猪',
    amount: '33,779',
  },
  {
    id: 3,
    name: '内生猪',
    amount: '29,588',
  },
  {
    id: 4,
    name: '长白猪',
    amount: '8,636',
  },
];

export default class TopActiveChart extends Component {
  static displayName = 'TopActiveChart';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
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
  renderProduct = (value, index, record) => {
    return (
      <div style={styles.product}>
        <p style={styles.prodyctTitle}>{record.name}</p>
      </div>
    );
  };

  render() {
    return (
      <Row wrap gutter="20">
        <Col xxs="24" s="12" l="12">
          <IceContainer title="本周配种数量排行">
            <Table
              dataSource={this.state.dataSource}
              hasBorder={false}
              hasHeader={false}
              style={{ width: '100%', height: '341px' }}
            >
              <Table.Column title="耳号" dataIndex="earId" />
              <Table.Column title="配种数量" dataIndex="MatingWeek" />
              <Table.Column
                title="配种占比"
                dataIndex="MatingWeek"
                cell={(value, index, record) => (
                  <Progress percent={record.MatingWeek} showInfo={false} />
                )}
              />
            </Table>
          </IceContainer>
        </Col>
        <Col xxs="24" s="12" l="12">
          <IceContainer title="品种">
            <Table
              dataSource={ViewedProducts}
              hasBorder={false}
              hasHeader={false}
              style={{ width: '100%', height: '341px' }}
            >
              <Table.Column
                title="名字"
                dataIndex="name"
                cell={(value, index, record) =>
                  this.renderProduct(value, index, record)
                }
                width="40%"
              />
              <Table.Column
                title="品种趋势"
                width="20%"
                cell={() => <LintChart />}
              />
              <Table.Column title="品种数量" dataIndex="amount" width="20%" />
            </Table>
          </IceContainer>
        </Col>
      </Row>
    );
  }
}

const styles = {
  product: {
    display: 'flex',
    alignItems: 'center',
  },
  productPic: {
    width: 60,
    height: 60,
  },
  productTitle: {
    margin: 0,
  },
};
