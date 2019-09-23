import React from 'react'
import { Ionicons } from '@expo/vector-icons'

import Colors from '../constants/colors'

export default function TabBarIcon(props) {
  return (
    <Ionicons
      name={props.name}
      size={26}
      style={[styles.icon, props.style]}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  )
}

const styles = {
  icon: {
    marginBottom: -3
  }
}
