import React from "react"
import ReactDOM from "react-dom"

import { Provider } from "react-redux"
import { BrowserRouter, Route } from "react-router-dom"

import store from "./store"
import Index from "./pages"
import pkg from "../package.json"

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route exact path="/" component={Index} />
      {/* For Github Pages */}
      <Route exact path={`/${pkg.name}`} component={Index} />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root"),
)
