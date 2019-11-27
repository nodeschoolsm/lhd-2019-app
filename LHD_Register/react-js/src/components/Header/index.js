import React from "react"
import { Menu } from "antd"
import MLH_PIC from "../../assets/images/Mlh.svg"
import RegistrationScreen from "../Registration"
import Teams from "../Teams"



export default ({ pushScreen = console.info, lang="" }) => {
  return (
    <div className="flex flex-col -m-4 pb-6">
      <div className="flex items-center justify-center border-b p-4">
        <img src={MLH_PIC} alt="ml-logo" className="w-48" />
      </div>
      <Menu defaultSelectedKeys={["menu-1"]} theme="light" mode="horizontal">
        <Menu.Item
          key="menu-1"
          onClick={() => {
            pushScreen(<RegistrationScreen lang={lang.register_team} />)
          }}
        >
          {lang.header.register_team}
        </Menu.Item>
        <Menu.Item
          key="menu-2"
          onClick={() => {
            pushScreen(<Teams />)
          }}
        >
          {lang.header.teams}
        </Menu.Item>
        <Menu.Item
          key="menu-3"
          onClick={() => {
            pushScreen(<RegistrationScreen lang={lang.register_team} />)
          }}
        >
          {lang.header.logout}
        </Menu.Item>
      </Menu>
    </div>
  )
}
