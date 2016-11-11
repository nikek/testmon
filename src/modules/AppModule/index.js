import {set} from 'cerebral/operators'

export default (module) => {
  return {
    state: {
      currentPage: 'home',
      number: '10'
    },
    signals: {
      homeRouted: [set('state:app.currentPage', 'home')],
      dashboardRouted: [set('state:app.currentPage', 'dashboard')],
      setNumber: [set('state:app.number', 'input:num')]
    }
  }
}
