import React from 'react';
import { Layout, Menu } from 'antd';
import Mlh from '../../assets/Mlh.svg'

const { Header} = Layout;

export const Head = () => {

    return(
      <>
    <Header style={{width: '100%' }}>
      <div className="logo">
      <img src={Mlh} alt="Logo" style={{width:'60%'}}/>
      </div>
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="2">Register</Menu.Item>
        <Menu.Item key="3">Teams</Menu.Item>
        <Menu.Item key="4">Logout</Menu.Item>
      </Menu>
    </Header>
      </>
    )


}
