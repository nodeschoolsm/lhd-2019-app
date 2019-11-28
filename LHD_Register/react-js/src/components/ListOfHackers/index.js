import React from "react"
import { List, Avatar, Icon } from "antd"
import Developer_photo from '../../assets/images/Developer_photo.png'

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
      renderItem={({ name = "", email = "" }, index) => (
        <List.Item
          actions={[
            <Icon type="delete" onClick={() => deleteMeByIndex(index)} />
          ]}
        >
          <List.Item.Meta
            avatar={<Avatar src={Developer_photo} />}
            title={name}
            description={email}
          />
        </List.Item>
      )}
    />
  )
}
