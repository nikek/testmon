import React, { Component } from 'react'
import {connect} from 'cerebral/react'

export default connect({
  user: 'user.*'
}, {
  signInClicked: 'user.signInClicked',
  signOutClicked: 'user.signOutClicked',
},
  class Auth extends Component {
    render() {
      const p = this.props
      return (
        <div>
          <p>{p.user && p.user.name}</p>
          <p>{!p.user && <button onClick={() => p.signInClicked()}>Sign In</button>}</p>
          <p>{p.user && <button onClick={() => p.signOutClicked()}>Sign Out</button>}</p>
        </div>
      )
    }
  }
)
