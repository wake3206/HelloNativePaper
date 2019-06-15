/* @flow */

import React, { Component } from 'react';
import { View, Platform, StyleSheet, Text } from 'react-native';
import {
    Colors,
    Appbar,
    FAB,
    Switch,
    Paragraph,
    withTheme,
} from 'react-native-paper';



class BtnStackScreen extends Component {
    static title = 'Appbar';
    

    render() {
        const {
            navigation,
            theme: {
                colors: { background },
            },
        } = this.props;
        return (
            <View
                style={[
                    styles.container,
                    {
                        backgroundColor: background,
                    },
                ]}
            >
                <View style={styles.row}>
                    <Paragraph>Left icon</Paragraph>
                    <Text>BtnStackScreen</Text>
                </View>
              
                <Appbar style={styles.bottom}>
                    <Appbar.Action icon="archive" onPress={() => { }} />
                    <Appbar.Action icon="mail" onPress={() => { }} />
                    <Appbar.Action icon="label" onPress={() => { }} />
                    <Appbar.Action icon="delete" onPress={() => { }} />
                </Appbar>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingVertical: 8,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    bottom: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    },
    fab: {
        position: 'absolute',
        right: 16,
        bottom: 28,
    },
});

export default withTheme(BtnStackScreen);
