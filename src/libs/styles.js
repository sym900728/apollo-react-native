'use strict'
/**
 * Import component from react native
 */
import {
  StyleSheet,
  Platform,
  PixelRatio
} from 'react-native'

const styles = StyleSheet.create({
  routerSceneStyle: {
    backgroundColor: 'white'
  },

  navigationBarStyle: {
    backgroundColor: '#40bdfd',
    borderWidth: 0,
    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: '#6BB9F9',
    ...Platform.select({
      ios: { height: 64 },
      android: { height: 44 }
    })
  },

  titleStyle: {
    color: 'white'
  },

  titleWrapperStyle: {
    marginTop: 0,
    ...Platform.select({
      ios: { top: 20 },
      android: { top: 0 }
    }),
    height: 44,
    justifyContent: 'center'
  },

  leftButtonStyle: {
    height: 44,
    width: 60,
    left: 0,
    padding: 0,
    paddingLeft: 10,
    alignItems: 'center',
    ...Platform.select({
      ios: { top: 20 },
      android: { top: 0 }
    })
  },

  leftButtonIconStyle: {
    width: 21,
    height: 21
  },

  rightButtonStyle: {
    width: 60,
    height: 44,
    right: 0,
    padding: 0,
    paddingRight: 10,
    justifyContent: 'center',
    ...Platform.select({
      ios: { top: 20 },
      android: { top: 0 }
    })
  },

  rightTitleStyle: {
    marginTop: -3,
    color: 'rgb(255, 255, 255)',
    fontSize: 15
  }
})

export default styles
