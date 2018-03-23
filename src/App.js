  import React, { Component } from 'react';
  import Header from './components/header.js'
  import { Layout, Row, Col} from 'antd';
  const { Content, Footer } = Layout;

  class App extends Component {
    render() {
      return (
          <Layout>
              <Header style={{ position: 'fixed', width: '100%' }}>
              </Header>
              <Content style={{ padding: '0 50px', marginTop: 64 }}>
                  <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
                      <Row>
                          <Col span={12}>col-12</Col>
                          <Col span={12}>col-12</Col>
                      </Row>
                      <Row>
                          <Col span={12}>col-12</Col>
                          <Col span={12}>col-12</Col>
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