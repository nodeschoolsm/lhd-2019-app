import React, { useState } from "react"
import { Layout } from "antd"
import Header from "../components/Header"
import Registration from "../components/Registration"
import languages from "../assets/languages/languages"

const { Content } = Layout

export default () => {

  let language;
    window.navigator.globalization.getPreferredLanguage(
      function (lang) {language=lang.value.split("-")[0]}
  );

  const lang = languages[language]
  const [currentScreen, setScreen] = useState(<Registration lang={lang.register_team} />)
  return (
    <>

      <Layout className="p-4 bg-white flex flex-col justify-center md:items-center">
      <div className="md:max-w-2xl">
        <Header pushScreen={setScreen} lang={lang}/>
        <Content>{currentScreen}</Content>
      </div>
      </Layout>

    </>
  )
}
