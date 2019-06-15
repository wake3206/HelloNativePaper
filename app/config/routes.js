import React from 'react';
import {
    createAppContainer,
    createDrawerNavigator,
    createStackNavigator,
    createBottomTabNavigator
} from 'react-navigation';
import Header from "../components/Header";
import { Button, Text, View } from 'react-native';
import { Appbar } from 'react-native-paper';

import DrawerItems from "../components/DrawerItems";
import HomeScreen from "../screens/HomeScreen";
import AppbarScreen from "../screens/AppbarScreen";
import BannerScreen from "../screens/BannerScreen";
import BtnStackScreen from "../screens/BtnStackScreen";

class HomeBtnScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home!</Text>
                <Button
                    title="Go to Settings"
                    onPress={() => this.props.navigation.navigate('Settings')}
                />
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}

class SettingsBtnScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings!</Text>
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}

class DetailsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Details!</Text>
            </View>
        );
    }
}

const HomeStack = createStackNavigator({
    Home: {
        screen:HomeBtnScreen
    },
    Details: DetailsScreen,
});

const SettingsStack = createStackNavigator({
    Settings: SettingsBtnScreen,
    Details: DetailsScreen,
});

const TabNavigator = createBottomTabNavigator({
    Home: HomeStack,
    Settings: SettingsStack,
});


const AppStack = createStackNavigator(
    {
        home: { screen: HomeScreen },
        appbar: { screen: AppbarScreen },
        bannner: {
            screen: BannerScreen,
            navigationOptions: ({ navigation }) => ({
                header: (<Header navigation={navigation} title="bannner page" />)
            })
        },
        btnStack: { 
            screen:TabNavigator
        }
    },
    // {
    //     defaultNavigationOptions: ({ navigation }) => ({
    //         header: (<Header navigation={navigation} />)
    //     }),
    // }
  
);



export const AppNavigator = createDrawerNavigator(
    {
        Home: {
            screen: AppStack
        }
    },
    {
        contentComponent: (props) => {
            return (
                <DrawerItems navigation={props.navigation} />
            )
        },
        drawerPosition: 'left'
    }
);