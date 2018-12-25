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
  Button, Dialog,
} from '@icedesign/base';
import Operation from '../../../../api/api';

import Load from '../../../load';

const { addPig, pigstylist } = Operation;
const { Row, Col } = Grid;
export default class CreateActivityForm extends Component {
  static displayName = 'CreateActivityForm';
  static defaultProps = {};
  constructor(props) {
    super(props);
    this.state = {
      dialog: false,
      pigstylist: [],
      value: {
        ERC721ID: Math.floor((Math.random() * ((9999999999999 - 1000000000000) + 1)) + 1000000000000),
        earId: new Date().getTime(),
        breed: '',
        column: '',
        ringNumber: '',
        matingWeek: '',
        remarks: '',
      },
    };
  }
  componentWillMount = async () => {
    const result = await pigstylist();
    this.setState({
      pigstylist: result,
    });
  }
  onFormChange = (value) => {
    this.setState({
      value,
    });
  };

  reset = () => {
    this.setState({
      value: {
        ERC721ID: this.state.value.ERC721ID,
        earId: this.state.value.earId,
        breed: '',
        column: '',
        ringNumber: '',
        matingWeek: '',
        remarks: '',
        pigstyId: '',
      },
    });
  };

  submit = () => {
    const athis = this;
    this.formRef.validateAll(async (error, value) => {
      if (error) {
        // 处理表单报错
      } else {
        const fromvalue = value;
        fromvalue.pigstyId = athis.dataselect.value;
        const result = await addPig(fromvalue);
        if (result.message === 'success') {
          athis.setState({
            dialog: true,
          });
          setTimeout(() => {
            athis.setState({
              dialog: false,
            });
            window.location.reload();
          }, 5000);
        }
      }
    });
  };
  hideDialog = () => {
    this.setState({
      dialog: false,
    });
  };
  operation = () => {
    const operation = [];
    const athis = this;
    for (let i = 0; i < this.state.pigstylist.length; i++) {
      operation.push(<option value={athis.state.pigstylist[i]} key={athis.state.pigstylist[i]}>{athis.state.pigstylist[i]}</option>);
    }
    return operation;
  }
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
                  猪舍号：
                </Col>
                <Col s="12" l="10">
                  <select ref={e => this.dataselect = e}>
                    {this.operation()}
                  </select>
                  <IceFormError name="pigstyId" />
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
                    name="matingWeek"
                    required
                    message="本周配种必须填写"
                  >
                    <Input style={{ width: '100%' }} />
                  </IceFormBinder>
                  <IceFormError name="matingWeek" />
                </Col>
              </Row>
              <Row style={styles.formItem}>
                <Col xxs="6" s="2" l="2" style={styles.formLabel}>
                  备注：
                </Col>
                <Col s="12" l="10">
                  <IceFormBinder
                    name="remarks"
                    message="备注可选"
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
                    确定
                  </Button>
                  <Button style={styles.resetBtn} onClick={this.reset}>
                    重置
                  </Button>
                </Col>
              </Row>
            </div>
          </IceFormBinderWrapper>
        </IceContainer>
        <Dialog
          className="simple-form-dialog"
          style={{ width: '100%', padding: 0, height: '100%', opacity: '0.6', background: 'black' }}
          autoFocus
          footerAlign="center"
          onClose={this.hideDialog}
          isFullScreen
          visible={this.state.dialog}
        >
          <Load />
        </Dialog>
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
