import React, { Component } from 'react';
import { Grid } from '@icedesign/base';
import IceContainer from '@icedesign/container';
import CustomTable from './CustomTable';
import Information from './Information';
import './main.css';
import Operations from '../../../../api/api';
import  LineChart from './LineChart';

let {showDetail,showHealth} = Operations;

const { Row, Col } = Grid;

export default class TrendChart extends Component {
  static displayName = 'TrendChart';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      id : window.location.hash.split("=")[1] || "0",
      showValue : {},
      show : '',
    };
    this.changetab = this.changetab.bind(this);
  }
  componentWillMount = async() =>{
    let showValue = await showDetail(this.state.id);
    this.setState({
      showValue : showValue,
    })
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      earId : nextProps.earId,
      breed : nextProps.breed,
      column: nextProps.column,
      ringNumber: nextProps.ringNumber,
      MatingWeek: nextProps.MatingWeek,
      remarks: nextProps.remarks,
      operation: nextProps.operation,
      status: nextProps.status,
    });
  }
  clearColor = () => {
    this.show.style.background = '';
    this.show.style.fontWeight = '';
    this.flow.style.background = '';
    this.flow.style.fontWeight = '';
    this.service.style.background = '';
    this.service.style.fontWeight = '';
  }
  changetab = (id) => {
    this.clearColor();
    switch (id) {
      case 0 : (
        this.show.style.background="#efefef",
        this.show.style.fontWeight="bolder",
        this.show.style.color="black",
        this.setState({
          show : <div>
            <Row>
              <Col l='24'>
                <Information value={this.state.showValue} />
              </Col>
            </Row>
          </div>
        })
      );break;
      case 1 : (
        this.flow.style.background="#efefef",
        this.flow.style.fontWeight="bolder",
        this.flow.style.color="black",
        this.setState ({
          show: <div>
            <Row>
              <Col l="24">
                <LineChart id={this.state.id} />
              </Col>
            </Row>
          </div>
        })
      );break;
      case 3 : (
        this.service.style.background="#efefef",
        this.service.style.fontWeight="bolder",
        this.service.style.color="black",
        window.location.href = window.location.origin + '#/quickchech/show'
      );break;
      default : break;
    }
  }
  render() {
    return (
      <IceContainer style={styles.container}>
        <div className="t1" style={{marginTop: '40px'}} id="daohang2">
          <a onClick = {() => {this.changetab(0)}}><span className="t2" style={{background: '#efefef', fontWeight: 'bolder'}} ref={el => this.show = el} >基本信息</span></a>
          <a onClick = {() => {this.changetab(1)}}><span className="t2" ref={el => this.flow = el}>健康信息</span></a>
          <a onClick = {() => {this.changetab(3)}}><span className="t2" ref={el => this.service = el}>返回上一层</span></a>
        </div>
        {this.state.show == ''? (
          <div>
            <Row>
              <Col l='24'>
                <Information value = {this.state.showValue}/>
              </Col>
            </Row>
          </div>) : (this.state.show)
        }
      </IceContainer>
    );
  }
}

const styles = {
  container: {
    padding: '0 0 20px',
  },
  title: {
    margin: '0',
    padding: '15px 20px',
    fonSize: '16px',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    color: 'rgba(0,0,0,.85)',
    fontWeight: '500',
    borderBottom: '1px solid #eee',
  },
};
