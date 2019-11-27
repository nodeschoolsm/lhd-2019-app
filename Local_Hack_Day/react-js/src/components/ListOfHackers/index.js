import React from 'react';
import { List, Avatar, Icon } from 'antd';

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
  },
  
];

export const ListOfHackers = ()=>{

    return(

        <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
      <List.Item
      actions={[<span><Icon type="delete" /></span>]}>
        <List.Item.Meta
          avatar={<Avatar src="https://cdn0.iconfinder.com/data/icons/bitcoin-cryptocurrency-lavender-vol-2-1/512/cypherpunk-512.png" />}
          title={item.title}
          description={item.description}
          />
      </List.Item>
    )}
    />
    )
}