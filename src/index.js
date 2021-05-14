import React from "react"
import ReactDOM from "react-dom"
import dotenv from "dotenv"

import { Provider } from "react-redux"
import { BrowserRouter, Route } from "react-router-dom"

import store from "./store"
import Index from "./pages"
import pkg from "../package.json"

dotenv.config()

// Base Path For Github Pages
ReactDOM.render(
  <BrowserRouter basename={process.env.BASE ? `/${pkg.name}` : "/"}>
    <Provider store={store}>
      <Route exact path="/" component={Index} />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root"),
)
