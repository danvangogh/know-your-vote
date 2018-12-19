import React from "react"
import NavBar from "./_navbar.js.jsx"
import Topic from "./_topic.js.jsx"
import App from "./_app.js.jsx"

class Main extends React.Component {
  render() {
    return(
      <div>
      <NavBar />
      <App />
      </div>
    )
  }
}

export default Main
