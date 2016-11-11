import React, { Component } from 'react'
import {connect} from 'cerebral/react'

export default connect({}, {
  routeToDashboardsClicked: 'app.dashboardRouted'
},
  class Home extends Component {
    render() {
      const p = this.props
      return (
        <p className="App-intro">
          <button onClick={() => p.routeToDashboardsClicked()}>Dashboards</button>
        </p>
      )
    }
  }
)
