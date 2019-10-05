import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { createBrowserHistory } from 'history'

import createRootReducer from './reducers'
import rootSaga from './sagas'
import logger from './helpers/logger'

export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL || '/',
})

export default function configureStore(preloadedState) {
  const composeEnhancers = composeWithDevTools({})
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [routerMiddleware(history), sagaMiddleware]

  if (process.env.NODE_ENV !== 'production') {
    /* eslint-disable-next-line global-require */
    middlewares.push(require('redux-immutable-state-invariant').default())
  }

  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancers(applyMiddleware(...middlewares)),
  )

  const sagas = sagaMiddleware.run(rootSaga)
  sagas.error(err => {
    logger.error('[Sagas error]', err)
  })

  return store
}
