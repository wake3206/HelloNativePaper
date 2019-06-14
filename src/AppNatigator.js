import React from "react";
import { View, Text, Button } from "react-native";
import { createAppContainer, createDrawerNavigator } from 'react-navigation';
import RootNavigator from './RootNavigator';
import DrawerItems from "./DrawerItems";

const AppNatigator = createDrawerNavigator(
    { Home: { screen: RootNavigator } },
    {
        contentComponent: (props) => {
            //console.log('--props-->', props);
            
            return (
                <DrawerItems navigation={props.navigation} />
            )
        },
        drawerPosition: 'left'
    }
);

export default createAppContainer(AppNatigator);