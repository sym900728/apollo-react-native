function isPlainObj (value) {
  return value && (value.constructor === Object || value.constructor === undefined)
}

// const combineReducers = (reducers, initialState) => (state = initialState, action) => {
//   reducers.forEach((reducer, key) => {
//     state = state.set(key, reducer(state.get(key), action))
//   })
//
//   return state
// }

export {
  isPlainObj
}
