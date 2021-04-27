import React from "react"
import ReactDOM from "react-dom"

import { Provider } from "react-redux"
import { BrowserRouter, Route } from "react-router-dom"

import store from "./store"
import Index from "./pages"

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route exact path="/" component={Index} />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root"),
)
