import React from 'react';
import './App.css';
import { Layout } from 'antd';
import {Head} from './components/Header'

import {RegisterTeam} from './components/RegisterTeam'

const { Content } = Layout

function App() {
  return (
    <div className="App">
    <Layout style={{backgroundColor:'white'}}>
      <Head/>
      <Content style={{ padding: '0 8px', marginTop: 85, height: '100vh' }}>
        <RegisterTeam></RegisterTeam>
     </Content>
      </Layout>
    </div>

  );
}

export default App;
