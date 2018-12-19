import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import Boar from './Boar';
import Sows from './Sows';
import Environmental from '../../../Detail/components/TrendChart/Environmental';
import Operations from '../../../../api/api';

const { showpiglist } = Operations;

export default class TrendChart extends Component {
  static displayName = 'TrendChart';
  static propTypes = {};
  static defaultProps = {};
  constructor(props) {
    super(props);
    this.state = {
      id: window.location.hash.split('=')[1] || '0',
      value: undefined,
      show: '',
    };
    this.changetab = this.changetab.bind(this);
  }
  componentWillMount = async () => {
    const result = await showpiglist(this.state.id);
    this.setState({
      value: result,
    });
  };

  clearColor = () => {
    this.Boar.style.background = '';
    this.Boar.style.fontWeight = '';
    // this.Sows.style.background = '';
    // this.Sows.style.fontWeight = '';
    this.environmental.style.background = '';
    this.environmental.style.fontWeight = '';
    // this.callback.style.background = '';
    // this.callback.style.fontWeight = '';
  }
  changetab = (id) => {
    this.clearColor();
    switch (id) {
      case 0: (
        this.Boar.style.background = '#efefef',
        this.Boar.style.fontWeight = 'bolder',
        this.Boar.style.color = 'black',
        this.setState({
          show: <Boar value={this.state.value} />,
        })
      ); break;
      case 1: (
        // this.Sows.style.background = '#efefef',
        // this.Sows.style.fontWeight = 'bolder',
        // this.Sows.style.color = 'black',
        this.setState({
          show: <Sows />,
        })
      ); break;
      case 2: (
        this.environmental.style.background = '#efefef',
        this.environmental.style.fontWeight = 'bolder',
        this.environmental.style.color = 'black',
        this.setState({
          show: <Environmental pigstyId={this.state.id} />,
        })
      ); break;
      case 3: (
        // this.callback.style.background = '#efefef',
        // this.callback.style.fontWeight = 'bolder',
        // this.callback.style.color = 'black',
        window.location.href = `${window.location.origin}#/quickchech/pigsty`
      ); break;
      default: break;
    }
  }
  render() {
    return (
      <IceContainer style={styles.container}>
        <div className="t1" style={{ marginTop: '40px', marginBottom: '20px' }} id="daohang2">
          <a onClick={() => { this.changetab(0); }}><span className="t2" style={{ background: '#efefef', fontWeight: 'bolder' }} ref={el => this.Boar = el} >公猪列表</span></a>
          {/* <a onClick={() => { this.changetab(1); }}><span className="t2" ref={el => this.Sows = el}>母猪列表</span></a> */}
          <a onClick={() => { this.changetab(2); }}><span className="t2" ref={el => this.environmental = el}>环境信息</span></a>
          {/* <a onClick={() => { this.changetab(3); }}><span className="t2" ref={el => this.callback = el}>返回上一层</span></a> */}
        </div>
        {
          this.state.show === '' ? (<Boar value={this.state.value} />) : (this.state.show)
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
