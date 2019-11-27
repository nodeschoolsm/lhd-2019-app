import React from "react"
import { List, Avatar, Icon } from "antd"

const AVATAR_URL =
  "https://cdn0.iconfinder.com/data/icons/bitcoin-cryptocurrency-lavender-vol-2-1/512/cypherpunk-512.png"


export default ({hackers = [], setHackers=console.info}) => {
  const deleteMeByIndex = index => {
    const clone = [...hackers]
    clone.splice(index, 1)
    setHackers(clone)
  }
  return (
    <List
      itemLayout="horizontal"
      dataSource={hackers}
      renderItem={({ nombre = "", email = "" }, index) => (
        <List.Item
          actions={[
            <Icon type="delete" onClick={() => deleteMeByIndex(index)} />
          ]}
        >
          <List.Item.Meta
            avatar={<Avatar src={AVATAR_URL} />}
            title={nombre}
            description={email}
          />
        </List.Item>
      )}
    />
  )
}
