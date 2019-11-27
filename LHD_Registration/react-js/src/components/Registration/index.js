import React from "react"
import ListOfHackers from "../ListOfHackers"
import { Input, Cascader, Button } from "antd"
const options = [
  {
    value: "1",
    label: "Web Development"
  },
  {
    value: "2",
    label: "Mobile Development"
  }
]
export default () => {
  return (
    <div>
      <Input placeholder="Team name" className="w-screen" />
      <Cascader options={options} placeholder="Category" className="w-screen" />
      <ListOfHackers />
      <Button type="primary">Register</Button>

      <Button type="dashed">Clear</Button>
    </div>
  )
}
