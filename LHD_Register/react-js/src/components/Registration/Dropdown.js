import React, { useState, useEffect } from "react"
import { Dropdown, Button, Menu, Icon } from "antd"

const API = process.env.REACT_APP_API_URL;




export default ({ category = {}, setCategory = console.info, text="" }) => {
  const [viewDropdown, showDropdown] = useState(false)
  const [categories, setCategories] = useState([])
  useEffect(()=>{
    fetch(API + 'teams_categories/')
    .then(res=>res.json())
    .then(data=>setCategories(data))
  },[])


  return (
    <Dropdown
      placement="bottomCenter"
      overlay={
        <Menu>
          {categories.map(({ idCategory, description }) => {
            return (
              <Menu.Item
              key={idCategory}
                onClick={() => {
                  showDropdown(false)
                  setCategory({ idCategory, description })
                }}
              >
                {description}
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
        {category.description ? category.description : text}
        {viewDropdown ? (
          <Icon type="arrow-down" />
        ) : (
          <Icon type="arrow-right" />
        )}
      </Button>
    </Dropdown>
  )
}
