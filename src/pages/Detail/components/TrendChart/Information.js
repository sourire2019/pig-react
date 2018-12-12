import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import {
  Input,
  Grid,
  Button,
} from '@icedesign/base';
import Operation from '../../../../api/api';


const {addPig} = Operation;
const { Row, Col } = Grid;



export default class CreateActivityForm extends Component {
  static displayName = 'CreateActivityForm';

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      earId : props.value.earId || '',
      breed : props.value.breed || '',
      column: props.value.column || '',
      ringNumber: props.value.ringNumber || '',
      MatingWeek: props.value.MatingWeek || '',
      remarks: props.value.remarks || '',
      operation: props.value.operation || '',
      status: props.value.status || '',
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      earId : nextProps.value.earId,
      breed : nextProps.value.breed,
      column: nextProps.value.column,
      ringNumber: nextProps.value.ringNumber,
      MatingWeek: nextProps.value.MatingWeek,
      remarks: nextProps.value.remarks,
      operation: nextProps.value.operation,
      status: nextProps.value.status,
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
                  {this.state.MatingWeek}
                </Col>
                <Col xxs="6" s="2" l="2" style={styles.formLabel}>
                  目前状态：
                </Col>
                <Col s="12" l="10">
                  {this.state.status}
                </Col>
              </Row>
              <Row style={styles.formItem}>
                <Col xxs="6" s="2" l="2" style={styles.formLabel}>
                  操作：
                </Col>
                <Col s="12" l="10">
                  {this.state.operation}
                </Col>
                <Col xxs="6" s="2" l="2" style={styles.formLabel}>
                   备注：
                </Col>
                <Col s="12" l="10">
                  {this.state.remarks}
                </Col>
              </Row>
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
