import React from 'react';
import { Appbar } from 'react-native-paper';

const Header = ({
    navigation,
    title
}) => {

    console.log('--->', navigation.state);
    
    return (
        <Appbar.Header>
            <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
            <Appbar.Content title={title || "Examples test"} />
        </Appbar.Header>
    );
};

export default Header;