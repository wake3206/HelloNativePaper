import React from 'react';
import { 
    createAppContainer, 
    createDrawerNavigator, 
    createStackNavigator 
} from 'react-navigation';
import { AppNavigator } from "./config/routes";





export default createAppContainer(AppNavigator);