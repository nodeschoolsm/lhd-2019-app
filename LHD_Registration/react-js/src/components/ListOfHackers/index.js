import React, { useState } from "react"
import { List, Avatar, Icon } from "antd"
const AVATAR_URL =
  "https://cdn0.iconfinder.com/data/icons/bitcoin-cryptocurrency-lavender-vol-2-1/512/cypherpunk-512.png"
const data = [
  {
    title: "Hacker's Name 1",
    description: "hacker1@gmail.com"
  },
  {
    title: "Hacker's Name 2",
    description: "hacker2@gmail.com"
  },
  {
    title: "Hacker's Name 3",
    description: "hacker3@gmail.com"
  },
  {
    title: "Hacker's Name 4",
    description: "hacker4@gmail.com"
  },
  {
    title: "Hacker's Name 5",
    description: "hacker5@gmail.com"
  }
]

export default () => {
  const [hackers, setHackers] = useState(data)
  const deleteMeByIndex = index => {
    const clone = [...hackers]
    clone.splice(index, 1)
    setHackers(clone)
  }
  return (
    <List
      itemLayout="horizontal"
      dataSource={hackers}
      renderItem={({ title = "", description = "" }, index) => (
        <List.Item
          actions={[
            <Icon type="delete" onClick={() => deleteMeByIndex(index)} />
          ]}
        >
          <List.Item.Meta
            avatar={<Avatar src={AVATAR_URL} />}
            title={title}
            description={description}
          />
        </List.Item>
      )}
    />
  )
}
