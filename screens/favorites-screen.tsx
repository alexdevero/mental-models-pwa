import React from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native'

import Styles from './../constants/styles'

export default function FavoritesScreen() {
  return(
    <ScrollView style={styles.container}>
      <View>
        <Text>Favorites</Text>
      </View>
    </ScrollView>
  )
}

FavoritesScreen.navigationOptions = {
  title: null,
  headerStyle: Styles.headerStyle,
  headerTitleStyle: Styles.headerTitleStyle
}

const styles = StyleSheet.create({
  container: Styles.viewContainerStyle
})
