import React from 'react'
import { render } from 'react-dom'
import { Controller } from 'cerebral'
import { Container } from 'cerebral/react'
import Devtools from 'cerebral/devtools'
import firebase from 'firebase'

import AppModule from './modules/AppModule'
import UserModule from './modules/UserModule'
import setupAuthListener from './setupAuthListener'
import FIRConfig from './firebase_config'

import App from './components/App'
import './index.css'


// Initialize Firebase
firebase.initializeApp(FIRConfig)

const controller = Controller({
  devtools: process.env.NODE_ENV === 'production' ? null : Devtools(),
  providers: [c => (c.firebase = firebase) && c],
  modules: {
    app: AppModule,
    user: UserModule
  }
})

setupAuthListener(firebase, controller.getSignal('user.setUser'))

render((
  <Container controller={ controller }>
    <App/>
  </Container>
  ), document.querySelector('#root')
)
