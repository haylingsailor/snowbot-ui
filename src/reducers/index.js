import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import jobsReducer from './jobs'

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    jobsReducer,
  })

export default createRootReducer
