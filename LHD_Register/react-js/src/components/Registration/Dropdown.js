import React, { useState } from "react"
import { Dropdown, Button, Menu, Icon } from "antd"
const categories = [
  {
    name: "Desarrollo Web"
  }
]
export default ({ category = {}, setCategory = console.info, text="" }) => {
  const [viewDropdown, showDropdown] = useState(false)

  return (
    <Dropdown
      placement="bottomCenter"
      overlay={
        <Menu>
          {categories.map(({ name, value }) => {
            return (
              <Menu.Item
                onClick={() => {
                  showDropdown(false)
                  setCategory({ name, value })
                }}
              >
                {name}
              </Menu.Item>
            )
          })}
        </Menu>
      }
      visible={viewDropdown}
      onVisibleChange={state => showDropdown(state)}
      className="w-full mt-2"
    >
      <Button
        className="flex items-center justify-center"
        size="large"
        onClick={() => showDropdown(true)}
      >
        {category.name ? category.name : text}
        {viewDropdown ? (
          <Icon type="arrow-down" />
        ) : (
          <Icon type="arrow-right" />
        )}
      </Button>
    </Dropdown>
  )
}
