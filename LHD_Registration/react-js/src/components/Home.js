import React from "react"
import { Layout } from "antd"
import Header from "../components/Header"
import Registration from "../components/Registration"
const { Content } = Layout

function App() {
  return (
    <Layout>
      <Header />
      <Content>
        <Registration />
      </Content>
    </Layout>
  )
}

export default App
