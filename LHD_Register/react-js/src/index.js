import React from "react"
import ReactDOM from "react-dom"
import Home from "./components/Home"
import "cordova_script"
import "tailwindcss/dist/tailwind.min.css"
document.addEventListener(
  "deviceready",
  () => {
    ReactDOM.render(
      <Home cordovaWork={true} />,
      document.querySelector("#root")
    )
  },
  false
)
