import React, { useState } from "react"
import ListOfHackers from "../ListOfHackers"
import RegistrationDropdown from "./Dropdown"
import { Input, Button, Icon, Divider } from "antd"

const db= [
  {
      "id": "50",
      "nombre": "Chris Fuentes",
      "email": "chris@gmail.com"
  },
  {
      "id": "60",
      "nombre": "Jorge Monge",
      "email": "monge@gmail.com"
  },
  {
      "id": "70",
      "nombre": "Denny Portillo",
      "email": "denny@gmail.com"
  },
  {
      "id": "80",
      "nombre": "Majo",
      "email": "majo@gmail.com"
  }
]

export default ({lang=""}) => {
  const [category, setCategory] = useState({})
  const [hackers, setHackers] = useState([])
  const [teamName, setTeamName] = useState()

  const scanQR = () =>{
    window.cordova.plugins.barcodeScanner.scan(
      function (result) {
         const value = db.filter((data)=>{
          return data.id==result.text
         })

         if(value.length>0){
           alert('Hacker encontrado')
           const clone = [...hackers]
           clone.push(value[0])
           setHackers(clone)
         }else{
           alert('Hacker no encontrado')
         }

      },
      function (error) {
          alert("Error: " + error);
      },
      {
          preferFrontCamera : false, 
          showFlipCameraButton : true, 
          showTorchButton : true, 
          prompt : lang.scan_prompt, 
          resultDisplayDuration: 500, 
          orientation : "vertical",
          formats : "QR_CODE"
      }
   );
  }

  const cancelRegistration = ()=>{
    setCategory({})
    setHackers([])
    setTeamName()
  }

  const onTeamNameChange = (input)=>{
  setTeamName(input.target.value)
  
}
  return (
    <div className="flex flex-col">
      <Input placeholder={lang.team_name} size="large" className="w-full mt-2" onChange={onTeamNameChange} value={teamName} />
      <RegistrationDropdown category={category} setCategory={setCategory} text={lang.set_category}  />
      <ListOfHackers hackers={hackers} setHackers={setHackers}/>
      <Button onClick={scanQR} className="flex items-center justify-center">
        <Icon type="plus" /> {lang.add_hacker}
      </Button>
      <Divider />
      <Button type="primary" size="large" className="mt-2 w-full">
        {lang.register_team}
      </Button>
      <Button type="dashed" className="mt-2 w-full" onClick={cancelRegistration}>
        {lang.cancel_registration}
      </Button>
    </div>
  )
}
