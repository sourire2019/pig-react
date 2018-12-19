import React from 'react';
import CustomTable from './CustomTable';
import Operations from '../../../../api/api';

const ReactHighcharts = require('react-highcharts');

const { showHealthMin, showHealthHour, showHealthDay } = Operations;
class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      select: 'minute',
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
    if (this.state.select === 'minute') {
      const result = await showHealthMin(id);
      this.setState({
        data: result,
      });
    } else if (this.state.select === 'hour') {
      const result = await showHealthHour(id);
      this.setState({
        data: result,
      });
    } else if (this.state.select === 'day') {
      const result = await showHealthDay(id);
      this.setState({
        data: result,
      });
    }
  }
  select = async () => {
    if (this.dataselect.value === 'minute') {
      const result = await showHealthMin(this.props.id);
      this.setState({
        select: 'minute',
        data: result,
      });
    } else if (this.dataselect.value === 'hour') {
      const result = await showHealthHour(this.props.id);
      this.setState({
        select: 'hour',
        data: result,
      });
    } else if (this.dataselect.value === 'day') {
      const result = await showHealthDay(this.props.id);
      this.setState({
        select: 'day',
        data: result,
      });
    }
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
        <select onClick={this.select} ref={e => this.dataselect = e}>
          <option value="minute">最近1分钟</option>
          <option value="hour">最近12小时</option>
          <option value="day">最近1天</option>
        </select>
        <ReactHighcharts config={config} />
        <CustomTable value={this.state.data} />
      </div>
    );
  }
}

export default LineChart;
