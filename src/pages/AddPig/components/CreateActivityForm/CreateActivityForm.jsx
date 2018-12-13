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

const { addPig } = Operation;
const { Row, Col } = Grid;
export default class CreateActivityForm extends Component {
  static displayName = 'CreateActivityForm';
  static defaultProps = {};
  constructor(props) {
    super(props);
    this.state = {
      value: {
        earId: Math.floor((Math.random() * ((9999999999999 - 1000000000000) + 1)) + 1000000000000),
        breed: undefined,
        column: '',
        ringNumber: '',
        MatingWeek: '',
        remarks: '',
      },
    };
  }

  onFormChange = (value) => {
    this.setState({
      value,
    });
  };

  reset = () => {
    this.setState({
      value: {
        earId: this.state.value.earId,
        breed: '',
        column: '',
        ringNumber: '',
        MatingWeek: '',
        remarks: '',
      },
    });
  };

  submit = () => {
    this.formRef.validateAll(async (error, value) => {
      if (error) {
        // 处理表单报错
      } else {
        const result = await addPig(value);
        if (result.message === 'success') {
          window.location.reload();
        }
      }
    });
  };

  render() {
    return (
      <div className="create-activity-form">
        <IceContainer style={styles.container}>
          <IceFormBinderWrapper
            ref={(formRef) => {
              this.formRef = formRef;
            }}
            value={this.state.value}
            onChange={this.onFormChange}
          >
            <div>
              <Row style={styles.formItem}>
                <Col xxs="6" s="2" l="2" style={styles.formLabel}>
                  耳号：
                </Col>

                <Col s="12" l="10">
                  {this.state.value.earId}
                </Col>
              </Row>
              <Row style={styles.formItem}>
                <Col xxs="6" s="2" l="2" style={styles.formLabel}>
                  品种：
                </Col>
                <Col s="12" l="10">
                  <IceFormBinder
                    name="breed"
                    required
                    message="品种必须填写"
                  >
                    <Input style={{ width: '100%' }} />
                  </IceFormBinder>
                  <IceFormError name="breed" />
                </Col>
              </Row>
              <Row style={styles.formItem}>
                <Col xxs="6" s="2" l="2" style={styles.formLabel}>
                  栋栏：
                </Col>
                <Col s="12" l="10">
                  <IceFormBinder
                    name="column"
                    required
                    message="栋栏必须填写"
                  >
                    <Input style={{ width: '100%' }} />
                  </IceFormBinder>
                  <IceFormError name="column" />
                </Col>
              </Row>
              <Row style={styles.formItem}>
                <Col xxs="6" s="2" l="2" style={styles.formLabel}>
                  圈号：
                </Col>
                <Col s="12" l="10">
                  <IceFormBinder
                    name="ringNumber"
                    required
                    message="圈号必须填写"
                  >
                    <Input style={{ width: '100%' }} />
                  </IceFormBinder>
                  <IceFormError name="ringNumber" />
                </Col>
              </Row>
              <Row style={styles.formItem}>
                <Col xxs="6" s="2" l="2" style={styles.formLabel}>
                  本周配种：
                </Col>
                <Col s="12" l="10">
                  <IceFormBinder
                    name="MatingWeek"
                    required
                    message="本周配种必须填写"
                  >
                    <Input style={{ width: '100%' }} />
                  </IceFormBinder>
                  <IceFormError name="MatingWeek" />
                </Col>
              </Row>
              <Row style={styles.formItem}>
                <Col xxs="6" s="2" l="2" style={styles.formLabel}>
                  备注：
                </Col>
                <Col s="12" l="10">
                  <IceFormBinder
                    name="remarks"
                    required
                    message="备注必须填写"
                  >
                    <Input style={{ width: '100%' }} />
                  </IceFormBinder>
                  <IceFormError name="remarks" />
                </Col>
              </Row>
              <Row style={styles.btns}>
                <Col xxs="6" s="2" l="2" style={styles.formLabel}>
                  {' '}
                </Col>
                <Col s="12" l="10">
                  <Button type="primary" onClick={this.submit}>
                    立即创建
                  </Button>
                  <Button style={styles.resetBtn} onClick={this.reset}>
                    重置
                  </Button>
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
  btns: {
    margin: '25px 0',
  },
  resetBtn: {
    marginLeft: '20px',
  },
};
