import React, { useState } from "react"
import { Menu } from "antd"
import MLH_PIC from "../../assets/images/Mlh.svg"
import RegistrationScreen from "../Registration"
import Teams from "../Teams"
export default ({ pushScreen = console.info, QR = console.info, setQRView=console.info }) => {
  console.log(QR)
  return (
    <div className="flex flex-col -m-4 pb-6">
      <div className="flex items-center justify-center border-b p-4">
        <img src={MLH_PIC} alt="ml-logo" className="w-48" />
      </div>
      <Menu defaultSelectedKeys={["menu-1"]} theme="light" mode="horizontal">
        <Menu.Item
          key="menu-1"
          onClick={() => {
            pushScreen(<RegistrationScreen QR={QR} setQRView={setQRView}  />)
          }}
        >
          Register
        </Menu.Item>
        <Menu.Item
          key="menu-2"
          onClick={() => {
            pushScreen(<Teams />)
          }}
        >
          Teams
        </Menu.Item>
        <Menu.Item
          key="menu-3"
          onClick={() => {
            pushScreen(<RegistrationScreen QR={QR} setQRView={setQRView} />)
          }}
        >
          Logout
        </Menu.Item>
      </Menu>
    </div>
  )
}
