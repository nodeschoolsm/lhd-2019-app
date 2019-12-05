import React, { useState } from "react"
import ListOfHackers from "../ListOfHackers"
import RegistrationDropdown from "./Dropdown"
import { Input, Button, Icon, Divider } from "antd"
import swal from 'sweetalert'
export default ({lang=""}) => {
  const [category, setCategory] = useState({})
  const [hackers, setHackers] = useState([])
  const [teamName, setTeamName] = useState()
  const API = process.env.REACT_APP_API_URL;
  const scanQR = () =>{
    window.cordova.plugins.barcodeScanner.scan(
      async function (result) {

        const data = await fetch(API + 'hackers/' + result.text)
        .then(res=>res.json());

        if(data){

          if(data.found===false){
            swal("¡Hacker no encontrado!", "", "warning")
            return false;
          }

          if(data.checkin){
            swal("¡Hacker ya registrado!", "", "warning")
            return false;
          }

          if (hackers.map(hacker=>hacker.id).indexOf(data.id)>-1){
            swal("¡Hacker ya se encuentra en el equipo!", "", "warning")
            return false;
          }
          
          const clone = [...hackers]
          clone.push(data)
          setHackers(clone)
          swal("¡Hacker encontrado!", data.name, "success")

        }else{
          swal("¡Ha ocurrido un error!", "Intentalo nuevamente", "error")
        }
      },
      function (error) {
        swal("¡Ha ocurrido un error!", "Intentalo nuevamente", "error")
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

  const registerTeam = ()=>{
    let data=
    {
      teamData:{
        idCategory: category.idCategory,
        idTeamType: 1,
        nameTeam: teamName
      },
      hackers:hackers.map(hacker=>hacker.id),
      createdBy:1
    }
    const options ={
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    },
      method: "POST",
      mode:"cors",
      body:JSON.stringify(data)
    }

    fetch(API+'teams/',options)
    .then(res=>{

      switch(res.status){
        case 200:
            swal("¡Equipo creado correctamente!", "", "success")
            cancelRegistration()
            break;
        
        case 500:
            swal("¡No se pudo crear el equipo!", "Intentalo nuevamente", "warning");
            break;

        default:
            swal("¡Ha ocurrido un error!", "Intentalo nuevamente", "error");
            break;
      }

    })
    .catch(err=>swal("¡Error al conectar con servidor!", "Intentalo nuevamente", "error"))
  }

  return (
    <div className="flex flex-col">
      <Input placeholder={lang.team_name} size="large" className="w-full mt-2" onChange={onTeamNameChange} value={teamName} />
      <RegistrationDropdown category={category} setCategory={setCategory} text={lang.set_category}  />
      <ListOfHackers hackers={hackers} setHackers={setHackers}/>
      {(hackers.length<5) ?
      <Button onClick={scanQR} className="flex items-center justify-center">
        <Icon type="plus" /> {lang.add_hacker}
      </Button>
      : null
      }
      <Divider />
      
      {(hackers.length<3) ? <Button type="primary" size="large" className="mt-2 w-full" disabled>{lang.register_team}</Button> : <Button type="primary" size="large" className="mt-2 w-full" onClick={registerTeam}>{lang.register_team}</Button>}
      <Button type="dashed" className="mt-2 w-full" onClick={cancelRegistration}>{lang.cancel_registration}</Button>
    </div>
  )
}
