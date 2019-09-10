import React from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native'

import Styles from './../constants/styles'

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text>Home</Text>
      </View>
    </ScrollView>
  )
}

HomeScreen.navigationOptions = {
  title: null,
  headerStyle: Styles.headerStyle,
  headerTitleStyle: Styles.headerTitleStyle
}

const styles = StyleSheet.create({
  container: Styles.viewContainerStyle
})
