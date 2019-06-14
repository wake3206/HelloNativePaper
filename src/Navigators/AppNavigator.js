import React from "react";
import { View, Text, Button } from "react-native";
import { createAppContainer, createDrawerNavigator, createStackNavigator } from 'react-navigation';
// import RootNavigator from './RootNavigator';
import DrawerItems from "../DrawerItems";
import { Appbar } from 'react-native-paper';
import AppbarExample from "../components/AppbarExample";


class HomeScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        //title: 'Examples class',
        return {
            header: (
                <Appbar.Header>
                    <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
                    <Appbar.Content title={'Home'} />
                </Appbar.Header>
            )
        }
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}


const RouteStack =  createStackNavigator(
    {
        home: { screen: HomeScreen },
        appbar:{ screen: AppbarExample}
    },
    {
        navigationOptions: ({ navigation }) => ({
            header: (
                <Appbar.Header>
                    <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
                    <Appbar.Content title="Examples test" />
                </Appbar.Header>
            ),
        }),
    }
);


const AppNavigator = createDrawerNavigator(
    {
        Home: {
            screen: RouteStack
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

export default createAppContainer(AppNavigator);