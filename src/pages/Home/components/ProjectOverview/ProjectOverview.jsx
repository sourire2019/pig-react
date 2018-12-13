import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Grid } from '@icedesign/base';

const { Row, Col } = Grid;

const mockData = [
  {
    title: '公猪总量',
    value: '100',
  },
  {
    title: '猪舍总量',
    value: '62',
  },
  {
    title: '品种种类',
    value: '3',
  },
  {
    title: '本周总配种数',
    value: '30',
  },
];

export default class Overview extends Component {
  static displayName = 'Overview';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <IceContainer style={styles.container}>
          <Row>
            <Col l="4">
              <div style={styles.item}>
                <img src={require('./images/box.svg')} alt="" />
              </div>
            </Col>
            {mockData.map((item, index) => {
              return (
                <Col l="4" key={index}>
                  <div style={styles.item}>
                    <p style={styles.itemTitle}>{item.title}</p>
                    <p style={styles.itemValue}>{item.value}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </IceContainer>
      </div>
    );
  }
}

const styles = {
  item: {
    height: '120px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemTitle: {
    color: '#697b8c',
    fontSize: '14px',
  },
  itemValue: {
    color: '#314659',
    fontSize: '36px',
    marginTop: '10px',
  },
};
