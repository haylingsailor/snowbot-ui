import React from 'react'
import ReactDOM from 'react-dom'
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'

import './main.scss'
import configureStore, { history } from './configureStore'

import App from './App'
import * as serviceWorker from './serviceWorker'

const store = configureStore()

const rootEl = document.getElementById('app')

const load = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App store={store} history={history} />
      </ConnectedRouter>
    </Provider>,
    rootEl,
  )
}

if (module.hot) {
  module.hot.accept('./App', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('./App').default
    ReactDOM.render(<NextApp />, rootEl)
  })
}
load()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
