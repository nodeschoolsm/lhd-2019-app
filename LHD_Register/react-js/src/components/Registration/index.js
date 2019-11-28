import React, { useState } from "react"
import ListOfHackers from "../ListOfHackers"
import RegistrationDropdown from "./Dropdown"
import { Input, Button, Icon, Divider } from "antd"

export default ({lang=""}) => {
  const [category, setCategory] = useState({})
  const [hackers, setHackers] = useState([])
  const [teamName, setTeamName] = useState()

  const scanQR = () =>{
    window.cordova.plugins.barcodeScanner.scan(
      async function (result) {

        const data = await fetch(`https://lhd-api.chrisft25.now.sh/api/hackers/${result.text}`)
        .then(async res=>{

          switch(res.status){
            case 404:
              return false;

            case 200:
              return await res.json()
              
            default:
                return false;
          }
        }
        );
        if(data){
          const clone = [...hackers]
           clone.push(data)
           setHackers(clone)
           alert('Hacker encontrado')
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
