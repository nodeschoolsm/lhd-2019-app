import React from "react"
import { Layout, Menu } from "antd"
import Mlh from "../../assets/images/Mlh.svg"
const { Header } = Layout

export default () => {
  return (
    <Menu theme="light" mode="horizontal" defaultSelectedKeys={["2"]}>
      <Menu.Item key="2">Register</Menu.Item>
      <Menu.Item key="3">Teams</Menu.Item>
      <Menu.Item key="4">Logout</Menu.Item>
    </Menu>
  )
}
