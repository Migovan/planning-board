import React, { Component } from 'react'
import Panel from './containers/panel'
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Black Han Sans', sans-serif;
  }
`

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle/>
        <Panel/>
      </div>
    );
  }
}

export default (App)

