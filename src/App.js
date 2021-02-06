import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import Layout, { Content, Footer, Header } from 'antd/lib/layout/layout';
import React, { Component, useState } from 'react';
import { DatePicker, Dropdown, Menu } from 'antd';
import { DownOutlined, CopyrightOutlined } from '@ant-design/icons';
import Navigation from './Components/Navigation';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const [websites,setWebsites]=useState([
    "Axis bank",
    "Bank of baroda",
    "Bank of India",
    "Canara Bank",
    "CITI",
    "DBS",
    "HDFC",
    "ICICI",
    "IDBI",
    "Indian Bank",
    "IndusInd",
    "Kotak Mahindra",
    "SBI",
    "PNB",
])
const [evalParams,setEvalParams]=useState(websites[0])
const [apps,setApps]=useState([
  "Tatasky",
  "DishTv",
  "Airtel",
  "Netflix",
  "Amazon Prime",
  "YouTube"
])

const handleDropDown=(e)=>{
  setEvalParams(e.key)
}

  const { SubMenu } = Menu;

      const menu = (
        <Menu onClick={handleDropDown}>
          <SubMenu title="Websites">
            {websites.map(item=>{
              return (<Menu.Item key={item}><Link to="/">{item}</Link></Menu.Item>)
            })}
          </SubMenu>
          <SubMenu title="Apps">
            {apps.map(item=>{
                return (<Menu.Item key={item}><Link to="/">{item}</Link></Menu.Item>)
              })}
          </SubMenu>
        </Menu>
      );


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
            <Link >
            <Dropdown overlay={menu}>
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                Websites/Apps <DownOutlined />
              </a>
            </Dropdown>
            </Link>
            </Menu.Item>
            <Menu.Item key="3">
            <Link to="/data-entry">User Data Entry</Link>
            </Menu.Item>
        </Menu>
        </Header>
        <Content style={{ padding: '0 50px',backgroundColor:'white' }}>
        <div className="site-layout-content">
            <Switch>
            <Route exact path="/"><Navigation 
            evalParams={evalParams}
            setEvalParams={setEvalParams}
            /></Route>
            <Route path="/:type"><Navigation
            evalParams={evalParams}
            setEvalParams={setEvalParams}
            /></Route>
            </Switch>
        </div>
        </Content>
        </Router>
        <Footer style={{ textAlign: 'center' }}><CopyrightOutlined /> Better Life Index</Footer>
    </Layout>
    </>
  );
}

export default App;
