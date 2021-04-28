import React from "react"
import ReactDOM from "react-dom"

import { Provider } from "react-redux"
import { BrowserRouter, Route } from "react-router-dom"

import store from "./store"
import Index from "./pages"
import pkg from "../package.json"

// Base Path For Github Pages
ReactDOM.render(
  <BrowserRouter basename={`/${pkg.name}`}>
    <Provider store={store}>
      <Route exact path="/" component={Index} />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root"),
)
