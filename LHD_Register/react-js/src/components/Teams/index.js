import React, { useEffect,useState } from "react"
import { List, Avatar, Modal } from "antd"
import Developer_photo from '../../assets/images/Developer_photo.png'

const API = process.env.REACT_APP_API_URL;


export default () => {
  const [state,setState] = useState({
    visible: false,
  })
  const [teams,setTeams] = useState([])
  
  const [membersData,setMembersData] = useState({})

  const getMembers = async (id)=>{
    let data = await (await fetch(API+'teams/'+id)).json()
    await setMembersData(data)
    showModal();
  }

  const showModal = () => {
    setState({
      visible: true,
    });
  };

  const handleOk = () => {
    setState({
      visible: false,
    });
  };

  const handleCancel = () => {
    setState({
      visible: false,
    });

  };

  useEffect(()=>{
    fetch(API+'teams/')
    .then(res=>res.json())
    .then(data=>setTeams(data))
  },[])

  return (
    <div className="w-full">
      <Modal
          title="Equipo"
          visible={state.visible}
          onOk={()=>handleOk()}
          onCancel={()=>handleCancel()}
        >
          <p>{membersData.categoy}</p>
          <p>{membersData.nameTeam}</p>
          <List
      itemLayout="horizontal"
      dataSource={membersData.members}
      renderItem={({ idHacker = "", hacker_name = "", email="" }) => (
        <List.Item key={idHacker}>
          <List.Item.Meta
            avatar={<Avatar src={Developer_photo} />}
            title={hacker_name}
            description={email}
          />
        </List.Item>
         )}
         />
        </Modal>
    <List
      itemLayout="horizontal"
      dataSource={teams}
      renderItem={({ id = "", category = "", nameTeam="",members="" }) => (
        <List.Item key={id} onClick={()=>getMembers(id)}>
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
