import React from 'react'
import { Platform } from 'react-native'
import {
  createBottomTabNavigator
} from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'

import TabBarIcon from '../components/tab-bar-icon'

import HomeScreen from '../screens/home-screen'
import FavoritesScreen from '../screens/favorites-screen'
import AboutScreen from '../screens/about-screen'
import SettingsScreen from '../screens/settings-screen'

// import MentalModelOne from './../mental-models/mental-model-01'

const HomeStack = createStackNavigator({
  Home: HomeScreen
}, {
  headerLayoutPreset: 'center'
})

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
    />
  )
}

const ModelsListStack = createStackNavigator({
  Models: FavoritesScreen,
  // 'MentalModelOne': MentalModelOne
}, {
  headerLayoutPreset: 'center'
})

ModelsListStack.navigationOptions = {
  tabBarLabel: 'Models',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-brain' : 'md-brain'}
    />
  )
}

const FavoritesStack = createStackNavigator({
  Favorites: FavoritesScreen
}, {
  headerLayoutPreset: 'center'
})

FavoritesStack.navigationOptions = {
  tabBarLabel: 'Favorites',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'}
    />
  )
}

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
}, {
  headerLayoutPreset: 'center'
})

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-cog' : 'md-cog'}
    />
  )
}

const AboutStack = createStackNavigator({
  Links: AboutScreen
}, {
  headerLayoutPreset: 'center'
})

AboutStack.navigationOptions = {
  tabBarLabel: 'About',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  )
}

// ? Docs: https://reactnavigation.org/docs/en/bottom-tab-navigator.html
const BottomTabNavigatorConfig = {
  tabBarOptions: {
    style: {
      borderTopColor: '#eee'
    }
  }
}

export default createBottomTabNavigator({
  HomeStack,
  FavoritesStack,
  SettingsStack,
  AboutStack
}, BottomTabNavigatorConfig)
