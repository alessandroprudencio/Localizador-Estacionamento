import React from 'react'

import { Image } from 'react-native'

import { createAppContainer } from "react-navigation"
import { createStackNavigator } from 'react-navigation-stack'

import Home from '../screens/Home'

const MainNavigator = createStackNavigator({
    Home
}, {
    defaultNavigationOptions: {
        headerShown: false
    }
})

export default createAppContainer(MainNavigator)