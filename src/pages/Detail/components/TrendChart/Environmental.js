import React from 'react';
import Operation from '../../../../api/api';
import EnvironmentalTable from './EnvironmentalTable';
import './main.css';

const ReactHighcharts = require('react-highcharts');

const { showEnvironmentalMin } = Operation;

class Environmental extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentWillMount = async () => {
    const result = await showEnvironmentalMin(this.props.pigstyId);
    this.setState({
      data: result,
    });
    setInterval(() => this.syncData(this.props.pigstyId), 10000);
  }
  syncData = async (id) => {
    const result = await showEnvironmentalMin(id);
    this.setState({
      data: result,
    });
  }
  render() {
    const datetime = [],
      humidity = [],
      CO2 = [],
      temperature = [];
    const data = this.state.data;
    for (let i = 0; i < this.state.data.length; i++) {
      datetime.push(data[i].datetime);
      temperature.push(parseFloat(data[i].temperature));
      humidity.push(parseFloat(data[i].humidity));
      CO2.push(parseFloat(data[i].co2));
    }
    const config = {
      credits: {
        enabled: false,
      },
      chart: {
        type: 'column',
      },
      title: {
        text: '',
      },
      xAxis: {
        title: {
          text: '时间',
        },
        categories: datetime,
      },
      yAxis: [
        {
          title: {
            text: '值',
          },
        },
      ],
      series: [
        {
          name: '温度',
          type: 'spline',
          pointStart: 0,
          color: '#f29b70',
          zIndex: 3,
          data: temperature,
        },
        {
          name: '湿度',
          type: 'spline',
          pointStart: 0,
          color: '#f1fc70',
          zIndex: 3,
          data: humidity,
        },
        {
          name: '二氧化碳',
          type: 'spline',
          pointStart: 0,
          color: '#f26b70',
          zIndex: 3,
          data: CO2,
        },
      ],
    };
    return (
      <div>
        <div style={{ overflow: 'hidden', marginBottom: '20px' }}>
          <div style={{ float: 'left', marginLeft: '10px' }}>
            <strong>猪舍编号:</strong><span>{this.props.pigstyId}</span>
          </div>
          <div style={{ float: 'right', marginRight: '10px' }}>
            最近5分钟
          </div>

        </div>
        <ReactHighcharts config={config} />
        <EnvironmentalTable value={this.state.data} />
      </div>
    );
  }
}

export default Environmental;
