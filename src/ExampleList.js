import * as React from 'react';
import { FlatList } from 'react-native';
import { List, Divider, withTheme } from 'react-native-paper';
import AppbarExample from './components/AppbarExample';
import { Appbar } from 'react-native-paper';


export const examples = {
    appbar: AppbarExample
};

const data = Object.keys(examples).map(id => ({ id, data: examples[id] }));

class ExampleList extends React.Component {
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

    _renderItem = ({ item }) => (
        <List.Item
            title={item.data.title}
            onPress={() => this.props.navigation.navigate(item.id)}
        />
    );

    _keyExtractor = item => item.id;

    render() {
        const {
            theme: {
                colors: { background },
            },
        } = this.props;

        return (
            <FlatList
                contentContainerStyle={{ backgroundColor: background }}
                ItemSeparatorComponent={Divider}
                renderItem={this._renderItem}
                keyExtractor={this._keyExtractor}
                data={data}
            />
        );
    }
}

export default withTheme(ExampleList);