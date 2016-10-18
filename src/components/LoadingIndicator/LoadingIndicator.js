'use strict'
/**
 * Import React from react
 */
import React, {
  Component,
  PropTypes
} from 'react'
/**
 * The components we need from ReactNative
 */
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Platform
} from 'react-native'
/**
 * Loading Indicator
 * ActivityIndicatorIOS and ProgressBarAndroid is deprecated,
 * use ActivityIndicator replaced
 */
class LoadingIndicator extends Component {

  render () {
    let view = null
    if (this.props.isVisible) {
      view = (
        <View style={[styles.container, this.props.style]}>
          <View style={[styles.indicatorContainer, {
            backgroundColor: this.props.overlayColor,
            width: this.props.overlayWidth,
            height: this.props.overlayHeight
          }]}>
            <ActivityIndicator color={this.props.color} size={this.props.size} />
          </View>
        </View>
      )
    }
    return (view)
  }
}

LoadingIndicator.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
  overlayColor: PropTypes.string,
  overlayWidth: PropTypes.number,
  overlayHeight: PropTypes.number
}

LoadingIndicator.defaultProps = {
  isVisible: false,
  overlayHeight: (Platform.OS === 'ios') ? 60 : 50,
  overlayWidth: (Platform.OS === 'ios') ? 60 : 50,
  size: 'small',
  color: 'white',
  overlayColor: 'rgba(0, 0, 0, 0.75)'
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: 'transparent',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },

  indicatorContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  }
})

export default LoadingIndicator
