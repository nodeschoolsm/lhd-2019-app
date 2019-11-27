import React, { useState } from "react"
import ListOfHackers from "../ListOfHackers"
import RegistrationDropdown from "./Dropdown"
import { Input, Dropdown, Button, Menu, Icon, Divider } from "antd"

export default () => {
  const [category, setCategory] = useState({})
  return (
    <div className="flex flex-col">
      <Input placeholder="Team name" size="large" className="w-full mt-2" />
      <RegistrationDropdown category={category} setCategory={setCategory} />
      <ListOfHackers />
      <Button className="flex items-center justify-center">
        <Icon type="plus" /> Add hacker
      </Button>
      <Divider />
      <Button type="primary" size="large" className="mt-2 w-full">
        Register team
      </Button>
      <Button type="dashed" className="mt-2 w-full">
        Cancel registration
      </Button>
    </div>
  )
}
