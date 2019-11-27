import React,{useEffect,useState} from 'react';
import { Layout, Menu } from 'antd';
import Mlh from '../../assets/Mlh.svg'

const { Header} = Layout;

export const Head = () => {
const [date,setDate] = useState()

 
const onDateChange = (data) =>{
  console.log(data._d)
  setDate(data._d)
  console.log('date: ' + date)
}

    useEffect(function () {
        fetch('https://petgram-server.chrisft25.now.sh/categories')
          .then(res => res.json())
          .then(response => {
           console.log(response)
          })
      },[])



    return(
      <>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
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
