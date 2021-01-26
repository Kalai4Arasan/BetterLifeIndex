import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import Layout, { Content, Footer, Header } from 'antd/lib/layout/layout';
import React, { Component } from 'react';
import { DatePicker, Menu } from 'antd';
import Navigation from './Components/Navigation';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
    <Layout >
        <Router>
        <Header style={{backgroundColor:'#f0f2f5',display:'flex',justifyContent:'space-between'}}>
        <h1>Better Life Index</h1>
        <Menu style={{float: 'right',backgroundColor:'#f0f2f5'}}   mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to="/">Index</Link>
            </Menu.Item>
            <Menu.Item key="2">
            <Link to="/responses">Responses</Link>
            </Menu.Item>
            <Menu.Item key="3">
            <Link to="/country">Country</Link>
            </Menu.Item>
        </Menu>
        </Header>
        <Content style={{ padding: '0 50px',backgroundColor:'white' }}>
        <div className="site-layout-content">
            <Switch>
            <Route exact path="/"><Navigation/></Route>
            <Route path="/:type"><Navigation/></Route>
            </Switch>
        </div>
        </Content>
        </Router>
        <Footer style={{ textAlign: 'center' }}>Better Life Index</Footer>
    </Layout>
    </>
  );
}

export default App;
