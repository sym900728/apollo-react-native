'use strict'
import { combineReducers } from 'redux'
import { reducer as global } from 'modules/GlobalModule'
/**
 * combine reducers
 */
export const reducer = combineReducers({
  global
})
