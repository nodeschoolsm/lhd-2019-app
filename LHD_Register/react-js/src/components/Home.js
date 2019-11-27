import React, { useState } from "react"
import { Layout } from "antd"
import Header from "../components/Header"
import Registration from "../components/Registration"
import QRView from "../components/QRView"
const { Content } = Layout

export default () => {
  const [currentScreen, setScreen] = useState(<Registration />)
  const [isQRView, setQRView] = useState(false)
  return (
    <>
     {!isQRView ?
      <Layout className="p-4 bg-white flex flex-col justify-center md:items-center">
      <div className="md:max-w-2xl">
        <Header pushScreen={setScreen} QR={isQRView} setQRView={setQRView} />
        <Content>{currentScreen}</Content>
      </div>
      </Layout>
      : <QRView/>}
    </>
  )
}
