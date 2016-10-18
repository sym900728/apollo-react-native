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
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Platform
} from 'react-native'
/**
 * This is more loading indicator, which is used with list view or scroll view
 * ActivityIndicatorIOS and ProgressBarAndroid is deprecated,
 * use ActivityIndicator replaced
 */
class MoreLoadingIndicator extends Component {

  renderContentByStatus () {
    let view = null
    switch (this.props.status) {
      case 'touch-default':
        view = (
          <TouchableOpacity onPress={this.props.load}>
            <View style={{width: this.props.width, height: this.props.height,
            justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: this.props.textFontSize, color: this.props.textColor}}>
                点击加载更多!
              </Text>
            </View>
          </TouchableOpacity>
        )
        break
      case 'default':
        view = (
          <Text style={{fontSize: this.props.textFontSize, color: this.props.textColor}}>
            上拉加载更多!
          </Text>)
        break
      case 'loading':
        view = (
          <View style={[styles.indicatorContainer, {width: this.props.width}]}>
            <View style={styles.indicatorContainer}>
              <ActivityIndicator color={this.props.color} size={this.props.size} />
              <Text style={[styles.text, {fontSize: this.props.textFontSize, color: this.props.textColor}]}>
                正在加载中...
              </Text>
            </View>
          </View>
        )
        break
      case 'none':
        view = (
          <Text style={{fontSize: this.props.textFontSize, color: this.props.textColor}}>
            没有更多内容了!
          </Text>)
        break
      case 'error':
        view = (
          <TouchableOpacity onPress={this.props.reload}>
            <View style={{width: this.props.width, height: this.props.height,
            justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: this.props.textFontSize, color: this.props.textColor}}>
                加载失败, 点击重新加载!
              </Text>
            </View>
          </TouchableOpacity>
        )
        break
    }
    return (view)
  }

  render () {
    let view = null
    if (this.props.status === 'dismiss') {
      view = null
    } else {
      view = (
        <View style={[styles.container, this.props.style, {width: this.props.width, height: this.props.height}]}>
          {this.renderContentByStatus()}
        </View>
      )
    }
    return (view)
  }
}

MoreLoadingIndicator.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number,
  status: PropTypes.oneOf(['default', 'touch-default', 'loading', 'none', 'error', 'dismiss']),
  color: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
  textDescription: PropTypes.string,
  textFontSize: PropTypes.number,
  textColor: PropTypes.string,
  reload: PropTypes.func,
  load: PropTypes.func
}

MoreLoadingIndicator.defaultProps = {
  height: (Platform.OS === 'ios') ? 50 : 50,
  isVisible: false,
  size: 'small',
  color: 'gray',
  textFontSize: (Platform.OS === 'ios') ? 14 : 13,
  textColor: '#262626',
  load: () => {}
}

const styles = StyleSheet.create({

  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  text: {
    flex: 1,
    marginLeft: 5
  },

  progress: {
    flex: 1,
    marginRight: 5
  }

})

export default MoreLoadingIndicator
