import React, { Component } from 'react'
import { connect } from 'cerebral/react'
import logo from './logo.svg'
import './App.css'
import Auth from './Auth'
import Home from './Home'
import Dashboard from './Dashboard'

export default connect({
  currentPage: 'app.currentPage',
}, class App extends Component {
  render() {
    const p = this.props
    const pages = {
      home: Home,
      dashboard: Dashboard
    }
    const Page = pages[p.currentPage]

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to {p.currentPage}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Auth />
        <Page />
      </div>
    )
  }
})
