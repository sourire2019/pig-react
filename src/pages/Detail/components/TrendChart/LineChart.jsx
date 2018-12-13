import React from 'react';
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
} from 'bizcharts';
import CustomTable from './CustomTable';
import Operations from '../../../../api/api';

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
    const cols = {
      datetime: {
        alias: '月份',
      },
      count: {
        alias: '体温',
      },
    };
    return (
      <div>
        <select onClick={this.select} ref={e => this.dataselect = e}>
          <option value="minute">最近1分钟</option>
          <option value="hour">最近12小时</option>
          <option value="day">最近1天</option>
        </select>
        <Chart height={400} data={this.state.data} scale={cols} forceFit>
          <Axis
            name="datetime"
            title={null}
            tickLine={null}
            line={{
              stroke: '#E6E6E6',
            }}
          />
          <Axis
            name="count"
            line={false}
            tickLine={null}
            grid={null}
            title={null}
          />
          <Tooltip />
          <Geom
            type="line"
            position="datetime*count"
            size={1}
            color="l (270) 0:rgba(255, 146, 255, 1) .5:rgba(100, 268, 255, 1) 1:rgba(215, 0, 255, 1)"
            shape="smooth"
            style={{
              shadowColor: 'l (270) 0:rgba(21, 146, 255, 0)',
              shadowBlur: 60,
              shadowOffsetY: 6,
            }}
          />
        </Chart>
        <CustomTable value={this.state.data} />
      </div>
    );
  }
}

export default LineChart;
