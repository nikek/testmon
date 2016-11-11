import React, { Component } from 'react'
import {connect} from 'cerebral/react'

export default connect({
  number: 'app.number'
}, {
  routeToHomeClicked: 'app.homeRouted'
},
  class Dashboard extends Component {
    render() {
      const p = this.props
      return (
        <p className="App-intro">
          <button onClick={() => p.routeToHomeClicked()}>Home</button><output>{this.props.number}</output>
        </p>
      )
    }
  }
)
