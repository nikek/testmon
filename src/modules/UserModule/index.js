import {set, when} from 'cerebral/operators'
import signIn from './actions/signIn.js'
import signOut from './actions/signOut.js'
import listenForData from './actions/listenForData.js'


export default (module) => {
  return {
    state: null,
    signals: {
      signInClicked: [signIn],
      signOutClicked: [signOut],
      setUser: [
        set(`state:${module.path.join('.')}`, 'input:user'),
        when('input:user'), {
          true: [listenForData],
          false: [set('state:app.number', null)]
        }
      ]
    }
  }
}
