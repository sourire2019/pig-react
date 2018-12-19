import React from 'react';
import CustomTable from './CustomTable';
import Operations from '../../../../api/api';

const ReactHighcharts = require('react-highcharts');

const { showHealthMin } = Operations;
class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentWillMount = async () => {
    const result = await showHealthMin(this.props.id);
    this.setState({
      data: result,
    });
    setInterval(() => this.syncData(this.props.id), 10000);
  }
  syncData = async (id) => {
    const result = await showHealthMin(id);
    this.setState({
      data: result,
    });
  }

  render() {
    const datetime = [],
      temperature = [];
    const data = this.state.data;
    for (let i = 0; i < this.state.data.length; i++) {
      datetime.push(data[i].datetime);
      temperature.push(parseFloat(data[i].temperature));
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
            text: '体温',
          },
        },
      ],
      series: [
        {
          name: '体温',
          type: 'spline',
          pointStart: 0,
          color: '#f29b70',
          zIndex: 3,
          data: temperature,
        },
      ],
    };

    return (
      <div>
        <div style={{ marginBottom: '20px', overflow: 'hidden' }}>
          <div style={{ float: 'left', marginLeft: '10px' }}>耳号： {this.props.id}</div>
          <div style={{ float: 'right', marginRight: '10px' }}>最近5分钟</div>
        </div>

        <ReactHighcharts config={config} />
        <CustomTable value={this.state.data} />
      </div>
    );
  }
}

export default LineChart;
