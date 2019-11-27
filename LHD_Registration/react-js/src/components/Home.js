import React, { useState } from "react"
import { Layout } from "antd"
import Header from "../components/Header"
import Registration from "../components/Registration"
const { Content } = Layout

export default () => {
  const [currentScreen, setScreen] = useState(<Registration />)
  return (
    <Layout className="p-4 bg-white  flex flex-col items-center">
      <div className="max-w-2xl">
        <Header pushScreen={setScreen} />
        <Content>{currentScreen}</Content>
      </div>
    </Layout>
  )
}
