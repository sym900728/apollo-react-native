'use strict'

import React, {
  Component
} from 'react'

import {
  AppRegistry
} from 'react-native'

import {
  Scene,
  Router
} from 'react-native-router-flux'

import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import { connect } from 'react-redux'
import { ApolloProvider } from 'react-apollo'
import ApolloClient, {
  createNetworkInterface
} from 'apollo-client'

import { reducer as global } from 'modules/GlobalModule'
import styles from 'libs/styles'
import HomeContainer from '../src/routes/home/containers/HomeContainer'

const networkInterface = createNetworkInterface('http://localhost:8080/graphql')
const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: r => r.id
})
const store = createStore(
  combineReducers({
    global: global,
    apollo: client.reducer()
  }),
  {},
  compose(applyMiddleware(thunk, client.middleware()))
)

const RouterWithRedux = connect()(Router)

export default function native(platform) {

  class Apollo extends Component {

    render () {
      return (
        <ApolloProvider store={store} client={client}>
          <RouterWithRedux
            navigationBarStyle={styles.navigationBarStyle} sceneStyle={styles.routerSceneStyle}
            titleStyle={styles.titleStyle} titleWrapperStyle={styles.titleWrapperStyle}
            leftButtonStyle={styles.leftButtonStyle} leftButtonIconStyle={styles.leftButtonIconStyle}
            backButtonImage={require('libs/images/icon-back.png')}>
            <Scene key='root'>
              <Scene key='HomeContainer' component={HomeContainer} title='首页' />
            </Scene>
          </RouterWithRedux>
        </ApolloProvider>
      )
    }

  }
  AppRegistry.registerComponent('Apollo', () => Apollo)
}
