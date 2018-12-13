import React from 'react';
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Legend,
} from 'bizcharts';
import DataSet from '@antv/data-set';

import Operation from '../../../../api/api';
import EnvironmentalTable from './EnvironmentalTable';
import './main.css';

const { showEnvironmentalMin, showEnvironmentalHour, showEnvironmentalDay } = Operation;

class Environmental extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      select: 'minute',
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
    if (this.state.select === 'minute') {
      const result = await showEnvironmentalMin(id);
      this.setState({
        data: result,
      });
    } else if (this.state.select === 'hour') {
      const result = await showEnvironmentalHour(id);
      this.setState({
        data: result,
      });
    } else if (this.state.select === 'day') {
      const result = await showEnvironmentalDay(id);
      this.setState({
        data: result,
      });
    }
  }
  select = async () => {
    if (this.dataselect.value === 'minute') {
      const result = await showEnvironmentalMin(this.props.id);
      this.setState({
        select: 'minute',
        data: result,
      });
    } else if (this.dataselect.value === 'hour') {
      const result = await showEnvironmentalHour(this.props.id);
      this.setState({
        select: 'hour',
        data: result,
      });
    } else if (this.dataselect.value === 'day') {
      const result = await showEnvironmentalDay(this.props.id);
      this.setState({
        select: 'day',
        data: result,
      });
    }
  }
  render() {
    const ds = new DataSet();
    const dv = ds.createView().source(this.state.data);
    dv.transform({
      type: 'fold',
      fields: ['CO2', 'temperature', 'humidity'],
      // 展开字段集
      key: 'city',
      // key字段
      value: 'temperature', // value字段
    });
    const cols = {
      datetime: {
        range: [0, 1],
      },
    };
    return (
      <div>
        <div style={{ overflow: 'hidden' }}>
          <div style={{ float: 'left' }}>
            <strong>猪舍编号:</strong><span>{this.props.pigstyId}</span>
          </div>
          <div style={{ float: 'right' }}>
            <select onClick={this.select} ref={e => this.dataselect = e}>
              <option value="minute">最近1分钟</option>
              <option value="hour">最近12小时</option>
              <option value="day">最近1天</option>
            </select>
          </div>
        </div>
        <Chart height={400} data={dv} scale={cols} forceFit style={{ marginLeft: '-20px' }}>
          <Legend />
          <Axis name="datetime" />
          <Axis
            name="temperature"
            // label={{
            //   formatter: val => `${val}°C`,
            // }}
          />
          <Tooltip
            crosshairs={{
              type: 'y',
            }}
          />
          <Geom
            type="line"
            position="datetime*temperature"
            size={2}
            color="city"
            shape="smooth"
          />
          <Geom
            type="point"
            position="datetime*temperature"
            size={4}
            shape="circle"
            color="city"
            style={{
              stroke: '#fff',
              lineWidth: 1,
            }}
          />
        </Chart>
        <EnvironmentalTable value={this.state.data} />
      </div>
    );
  }
}

export default Environmental;
