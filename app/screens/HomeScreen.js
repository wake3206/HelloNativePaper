import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { Appbar } from 'react-native-paper';

class HomeScreen extends Component {

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
                <Text>Home Screen!!</Text>
            </View>
        );
    }
}


export default HomeScreen;