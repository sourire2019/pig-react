/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import { Input, Button, Grid } from '@icedesign/base';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import IceIcon from '@icedesign/icon';
import cookie from 'react-cookies';
import './UserLogin.scss';
import Operations from '../../../../api/api';

const { login } = Operations;
const { Row, Col } = Grid;
// 寻找背景图片可以从 https://unsplash.com/ 寻找
const backgroundImage = require('./images/pig.jpg');

export default class UserLogin extends Component {
  static displayName = 'UserLogin';
  static propTypes = {};
  static defaultProps = {};
  constructor(props) {
    super(props);
    this.state = {
      account: 'Admin',
      password: 'admin',
      part: 'enterprise',
      value: {
        account: undefined,
        password: undefined,
        part: undefined,
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.part = this.part.bind(this);
    this.account = this.account.bind(this);
    this.password = this.password.bind(this);
  }


  handleSubmit = async () => {
    const result = await login(this.state);
    if (result.message === 'success') {
      cookie.save('status', '1');
      window.location.href = `${window.location.origin}/#/`;
    } else {
      alert('登录失败');
      cookie.save('status', '0');
    }
  };
  part= (e) => {
    this.setState({
      part: e,
    });
  }
  account= (e) => {
    this.setState({
      account: e,
    });
  }
  password= (e) => {
    this.setState({
      password: e,
    });
  }
  render() {
    return (
      <div style={styles.userLogin} className="user-login">
        <div
          style={{
            ...styles.userLoginBg,
            backgroundImage: `url(${backgroundImage})`,
          }}
        />
        <div style={styles.contentWrapper} className="content-wrapper">
          <h2 style={styles.slogan} className="slogan">
            欢迎进入 <br /> 智能养猪管理系统
          </h2>
          <div style={styles.formContainer}>
            <h4 style={styles.formTitle}>登录</h4>
            <IceFormBinderWrapper
              ref="form"
            >
              <div style={styles.formItems}>
                <Row style={styles.formItem}>
                  <Col>
                    <IceIcon
                      type="message"
                      size="small"
                      style={styles.inputIcon}
                    />
                    <IceFormBinder name="part" required message="必填">
                      <Input maxLength={20} placeholder="猪场企业" value={this.state.part} onChange={this.part} />
                    </IceFormBinder>
                  </Col>
                  <Col>
                    <IceFormError name="part" />
                  </Col>
                </Row>
                <Row style={styles.formItem}>
                  <Col>
                    <IceIcon
                      type="person"
                      size="small"
                      style={styles.inputIcon}
                    />
                    <IceFormBinder name="account" required message="必填">
                      <Input maxLength={20} placeholder="账号" value={this.state.account} onChange={this.account} />
                    </IceFormBinder>
                  </Col>
                  <Col>
                    <IceFormError name="account" />
                  </Col>
                </Row>

                <Row style={styles.formItem}>
                  <Col>
                    <IceIcon
                      type="lock"
                      size="small"
                      style={styles.inputIcon}
                    />
                    <IceFormBinder name="password" required message="必填">
                      <Input htmlType="password" placeholder="密码" value={this.state.password} onChange={this.password} />
                    </IceFormBinder>
                  </Col>
                  <Col>
                    <IceFormError name="password" />
                  </Col>
                </Row>


                <Row style={styles.formItem}>
                  <Button
                    type="primary"
                    onClick={this.handleSubmit}
                    style={styles.submitBtn}
                  >
                    登 录
                  </Button>
                </Row>
              </div>
            </IceFormBinderWrapper>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  userLogin: {
    position: 'relative',
    height: '100vh',
  },
  userLoginBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundSize: 'cover',
    opacity: 0.4,
  },
  formContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '30px 40px',
    background: '#fff',
    borderRadius: '6px',
    boxShadow: '1px 1px 2px #eee',
  },
  formItem: {
    position: 'relative',
    marginBottom: '25px',
    flexDirection: 'column',
  },
  formTitle: {
    margin: '0 0 20px',
    textAlign: 'center',
    color: '#3080fe',
    letterSpacing: '12px',
  },
  inputIcon: {
    position: 'absolute',
    left: '0px',
    top: '3px',
    color: '#999',
  },
  submitBtn: {
    width: '240px',
    background: '#3080fe',
    borderRadius: '28px',
  },
  checkbox: {
    marginLeft: '5px',
  },
  tips: {
    textAlign: 'center',
  },
  link: {
    color: '#999',
    textDecoration: 'none',
    fontSize: '13px',
  },
  line: {
    color: '#dcd6d6',
    margin: '0 8px',
  },
};
