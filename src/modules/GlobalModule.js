'use strict'

import { Record } from 'immutable'

const INVOKE_ISOLATE_METHOD = 'INVOKE_ISOLATE_METHOD'
/* =============================================== actions ===================================================== */
/**
 * invoke isolate method
 * click navigator and then invoke component's method inside
 */
const invokeIsolateMethod = (args) => {
  return {
    type: INVOKE_ISOLATE_METHOD,
    methodName: args.methodName,
    methodStatus: args.methodStatus
  }
}

export const actions = {
  invokeIsolateMethod
}

export const InitialState = Record({
  methodName: '',
  methodStatus: ''
})

const initialState = new InitialState()

export const reducer = (state = initialState, action) => {
  if (!(state instanceof InitialState)) return initialState.merge(state)
  switch (action.type) {
    case INVOKE_ISOLATE_METHOD:
      return state.setIn(['methodName'], action.methodName)
        .setIn(['methodStatus'], action.methodStatus)
  }
  return state
}
