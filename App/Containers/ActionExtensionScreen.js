// @flow

import React from 'react'
import { Text, View } from 'react-native'
import { Metrics } from '../Themes'

// Styles
import styles from './Styles/ActionExtensionScreenStyle'

export default class ActionExtensionScreen extends React.Component {

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello from our Action Extension!</Text>
      </View>
    )
  }

}
