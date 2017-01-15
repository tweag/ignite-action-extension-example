// @flow

import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    ...ApplicationStyles.screen.container,
    backgroundColor: Colors.silver,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.charcoal,
    textAlign: 'center',
    ...Fonts.style.h2
  }
})
