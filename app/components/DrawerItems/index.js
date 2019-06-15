import * as React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import {
    Drawer,
    withTheme,
    Switch,
    TouchableRipple,
    Text,
    Colors,
} from 'react-native-paper';



const DrawerItemsData = [
    { label: 'Home', icon: 'home', key: 1, screen: "home" },
    { label: 'Appbar', icon: 'inbox', key: 2, screen: "appbar" },
    { label: 'Banner', icon: 'inbox', key: 3, screen: "bannner" },
    { label: 'btnStack', icon: 'inbox', key: 4, screen: "btnStack" }
];

class DrawerItems extends React.Component {
    state = {
        open: false,
        drawerItemIndex: 0,
    };

    _setDrawerItem = index => this.setState({ drawerItemIndex: index });

    render() {
        const { colors } = this.props.theme;

        //console.log('----->', this.props)

        return (
            <View style={[styles.drawerContent, { backgroundColor: colors.surface }]}>
                <Drawer.Section title="Example items">
                    {
                        DrawerItemsData.map((props, index) => (
                            <Drawer.Item
                                {...props}
                                key={props.key}
                                theme={
                                    props.key === 3
                                        ? { colors: { primary: Colors.tealA200 } }
                                        : undefined
                                }
                                active={this.state.drawerItemIndex === index}
                                onPress={() => {
                                    this._setDrawerItem(index);
                                    if (props.screen) {
                                        this.props.navigation.navigate(props.screen)
                                    }

                                }}
                            />
                        ))
                    }
                </Drawer.Section>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 22,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});

export default withTheme(DrawerItems);