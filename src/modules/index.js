import { combineReducers } from 'redux'

import loader from './loader'
import alert from './alert'

export default combineReducers({
  loader,
  alert
})
