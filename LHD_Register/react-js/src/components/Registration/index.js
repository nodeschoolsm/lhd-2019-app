import React, { useState } from "react"
import ListOfHackers from "../ListOfHackers"
import RegistrationDropdown from "./Dropdown"
import { Input, Button, Icon, Divider } from "antd"

export default ({QR=console.info,setQRView=console.info}) => {
  const [category, setCategory] = useState({})

  const scanQR = () =>{
    window.cordova.plugins.barcodeScanner.scan(
      function (result) {
          alert("We got a barcode\n" +
                "Result: " + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled);
      },
      function (error) {
          alert("Scanning failed: " + error);
      },
      {
          preferFrontCamera : true, // iOS and Android
          showFlipCameraButton : true, // iOS and Android
          showTorchButton : true, // iOS and Android
          torchOn: true, // Android, launch with the torch switched on (if available)
          saveHistory: true, // Android, save scan history (default false)
          prompt : "Place a barcode inside the scan area", // Android
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
          orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations : true, // iOS
          disableSuccessBeep: false // iOS and Android
      }
   );
  }
  const setQR = () =>{
    setQRView(!QR)
    console.log(QR)
  }

  return (
    <div className="flex flex-col">
      <Input placeholder="Team name" size="large" className="w-full mt-2" />
      <RegistrationDropdown category={category} setCategory={setCategory} />
      <ListOfHackers />
      <Button onClick={scanQR} className="flex items-center justify-center">
        <Icon type="plus" /> Add hacker
      </Button>
      <Divider />
      <Button type="primary" size="large" className="mt-2 w-full">
        Register team
      </Button>
      <Button type="dashed" className="mt-2 w-full">
        Cancel registration
      </Button>
    </div>
  )
}
