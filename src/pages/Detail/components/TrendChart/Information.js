import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import {
  FormBinderWrapper as IceFormBinderWrapper,
} from '@icedesign/form-binder';
import {
  Grid,
} from '@icedesign/base';


const { Row, Col } = Grid;


export default class CreateActivityForm extends Component {
  static displayName = 'CreateActivityForm';

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      earId: props.value.earId,
      breed: props.value.breed,
      column: props.value.column,
      ringNumber: props.value.ringNumber,
      matingWeek: props.value.matingWeek,
      remarks: props.value.remarks,
      operation: props.value.operation,
      status: props.value.status,
      pigstyId: props.value.pigstyId,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      earId: nextProps.value.earId,
      breed: nextProps.value.breed,
      column: nextProps.value.column,
      ringNumber: nextProps.value.ringNumber,
      matingWeek: nextProps.value.matingWeek,
      remarks: nextProps.value.remarks,
      operation: nextProps.value.operation,
      status: nextProps.value.status,
      pigstyId: nextProps.value.pigstyId,
    });
  }
  render() {
    return (
      <div className="create-activity-form">
        <IceContainer style={styles.container}>
          <IceFormBinderWrapper >
            <div>
              <Row style={styles.formItem}>
                <Col xxs="6" s="2" l="2" style={styles.formLabel}>
                  耳号：
                </Col>
                <Col s="12" l="10">
                  {this.state.earId}
                </Col>
                <Col xxs="6" s="2" l="2" style={styles.formLabel}>
                  品种：
                </Col>
                <Col s="12" l="10">
                  {this.state.breed}
                </Col>
              </Row>
              <Row style={styles.formItem}>
                <Col xxs="6" s="2" l="2" style={styles.formLabel}>
                  栋栏：
                </Col>
                <Col s="12" l="10">
                  {this.state.column}
                </Col>
                <Col xxs="6" s="2" l="2" style={styles.formLabel}>
                  圈号：
                </Col>
                <Col s="12" l="10">
                  {this.state.ringNumber}
                </Col>
              </Row>
              <Row style={styles.formItem}>
                <Col xxs="6" s="2" l="2" style={styles.formLabel}>
                  本周配种：
                </Col>
                <Col s="12" l="10">
                  {this.state.matingWeek}
                </Col>
                <Col xxs="6" s="2" l="2" style={styles.formLabel}>
                  目前状态：
                </Col>
                <Col s="12" l="10">
                  {this.state.status == undefined ? ('正常') : (this.state.statuss)}
                </Col>
              </Row>
              <Row style={styles.formItem}>
                {/* <Col xxs="6" s="2" l="2" style={styles.formLabel}> */}
                {/* 操作： */}
                {/* </Col> */}
                {/* <Col s="12" l="10"> */}
                {/* {this.state.operation} */}
                {/* </Col> */}
                <Col xxs="6" s="2" l="2" style={styles.formLabel}>
                  猪舍：
                </Col>
                <Col s="12" l="10">
                  {this.state.pigstyId}
                </Col>

                <Col xxs="6" s="2" l="2" style={styles.formLabel}>
                   备注：
                </Col>
                <Col s="12" l="10">
                  {this.state.remarks}
                </Col>
              </Row>
              {/* <Row style={styles.formItem}> */}
              {/* <Col xxs="6" s="2" l="2" style={styles.formLabel}> */}
              {/* 猪舍： */}
              {/* </Col> */}
              {/* <Col s="12" l="10"> */}
              {/* {this.state.pigstyId} */}
              {/* </Col> */}
              {/* </Row> */}
            </div>
          </IceFormBinderWrapper>
        </IceContainer>
      </div>
    );
  }
}

const styles = {
  container: {
    paddingBottom: 0,
  },
  formItem: {
    height: '28px',
    lineHeight: '28px',
    marginBottom: '25px',
  },
  formLabel: {
    textAlign: 'right',
  },
};
