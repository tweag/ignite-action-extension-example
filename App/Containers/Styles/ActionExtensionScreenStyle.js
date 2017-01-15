// @flow

import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    flex: 1,
    backgroundColor: Colors.silver,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.charcoal,
    textAlign: 'center',
    ...Fonts.style.h2
  },
  button: {
    paddingTop: 2 * Metrics.doubleBaseMargin,
    width: Metrics.screenWidth,
  }
})
