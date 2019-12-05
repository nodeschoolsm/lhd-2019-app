import React, { useEffect,useState } from "react"
import { List, Avatar, Icon } from "antd"
import Developer_photo from '../../assets/images/Developer_photo.png'

const API = process.env.REACT_APP_API_URL;


export default () => {
  const [teams,setTeams] = useState([])

  useEffect(()=>{
    fetch(API+'teams/')
    .then(res=>res.json())
    .then(data=>setTeams(data))
  },[])

  const getTeamData = (id)=>{
    alert("me diste click " + id)
  }
  return (
    <div className="w-full">
    <List
      itemLayout="horizontal"
      dataSource={teams}
      renderItem={({ id = "", category = "", nameTeam="",members="" }) => (
        <List.Item key={id} onClick={()=>getTeamData(id)}>
          <List.Item.Meta
            avatar={<Avatar src={Developer_photo} />}
            title={`${nameTeam} (${members})`}
            description={`Category: ${category}`}
          />
        </List.Item>
      )}
    />
    </div>
  )
}
