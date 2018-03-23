  import React, { Component } from 'react';
  import Header from './components/header.js'
  import './app.css'
  import { Layout, Row, Col} from 'antd';
  const { Content, Footer } = Layout;

  class App extends Component {
    render() {
      return (
          <Layout>
              <Header style={{ position: 'fixed', width: '100%' }}>
              </Header>
              <Content style={{ padding: '0 50px', marginTop: 25 }}>
                  <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
                      <Row>
                          <Col span={12}>
                              <div className="gutter-box" style={{ background: '#fff'}} id="content">源程序</div>
                          </Col>
                          <Col span={12}>
                              <div className="gutter-box" style={{ background: '#00A0E9'}}>词法分析</div>
                          </Col>
                      </Row>
                      <Row>
                          <Col span={12}>
                              <div className="gutter-box" style={{ background: '#333'}}>语法分析</div>
                          </Col>
                          <Col span={12}>
                              <div className="gutter-box" style={{ background: '#fff'}}></div>
                          </Col>
                      </Row>
                  </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>
                  songxingguo 保留所有权利
              </Footer>
          </Layout>
      );
    }
  }

  export default App;