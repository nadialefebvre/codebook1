import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"

import "@fortawesome/fontawesome-free/css/all.min.css"
import "bulmaswatch/superhero/bulmaswatch.min.css"

import { store } from "./state"

import CellList from "./components/CellList"

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <CellList />
      </div>
    </Provider>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
