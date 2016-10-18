'use strict'

import React, {
  Component
} from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Map } from 'immutable'

import HomeCentre from '../components/HomeCentre'

const actions = []

function mapStateToProps (state) {
  return {
    ...state
  }
}
function mapDispatchToProps (dispatch) {
  const creators = Map()
    .merge(...actions)
    .filter(value => typeof value === 'function')
    .toObject()
  return {
    actions: bindActionCreators(creators, dispatch),
    dispatch
  }
}

class HomeContainer extends Component {
  render () {
    return (<HomeCentre {...this.props} />)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
