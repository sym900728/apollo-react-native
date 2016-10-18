'use strict'

import React, {
  Component
} from 'react'

import {
  StyleSheet,
  Platform,
  View,
  Text
} from 'react-native'

export default class HomeCentre extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>This is apollo native application</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 64 : 44,
    left: 0,
    right: 0,
    bottom: 0
  }
})
