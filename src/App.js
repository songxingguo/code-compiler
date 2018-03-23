  import React, { Component } from 'react';
  import Header from './components/header.js'
  import './app.css'
  import { Layout, Row, Col, Tag} from 'antd';
  const { Content, Footer } = Layout;

  class App extends Component {
    render() {
      return (
          <Layout>
              <Header style={{ position: 'fixed', width: '100%' }}>
              </Header>
              <Content style={{ padding: '0 50px', marginTop: 25 }}>
                  <div style={{ background: '#333', padding: 24, minHeight: 380 }}>
                      <Row>
                          <Col span={12}>
                              <div className="gutter-box" ref="resources" style={{ background: '#fff'}} id="content">
                                  <Tag color="#f50">源程序</Tag>
                                  <pre>

                                  </pre>
                              </div>
                          </Col>
                          <Col span={11} offset={1}>
                              <div className="gutter-box" style={{ background: '#fff'}}>
                                  <Tag color="#2db7f5">词法分析</Tag>
                              </div>
                          </Col>
                      </Row>
                      <Row style={{ margin: '10px 0'}} >
                          <Col span={12}>
                              <div className="gutter-box" style={{ background: '#fff'}}>
                                  <Tag color="#87d068">语法分析</Tag>
                              </div>
                          </Col>
                          <Col span={11} offset={1}>
                              <div className="gutter-box" style={{ background: '#fff'}}>
                                  <Tag color="#108ee9">编译</Tag>
                              </div>
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