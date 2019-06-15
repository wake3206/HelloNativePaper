/* @flow */

import * as React from 'react';
import {
    View,
    StyleSheet,
    Image,
    ScrollView,
    SafeAreaView,
    Dimensions,
} from 'react-native';
import { Banner, withTheme, FAB } from 'react-native-paper';
import { Appbar } from 'react-native-paper';

const PHOTOS = Array.from({ length: 24 }).map(
    (_, i) => `https://unsplash.it/300/300/?random&__id=${i}`
);

class BannerScreen extends React.Component {
    static title = 'Banner';

    static navigationOptions = {
        title: 'Bannerxx',
      };
    

    // static navigationOptions = ({ navigation }) => {
    //     //title: 'Examples class',
    //     return {
    //         header: (
    //             <Appbar.Header>
    //                 <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
    //                 <Appbar.Content title={'Banner'} />
    //             </Appbar.Header>
    //         )
    //     }
    // };

    state = {
        visible: true,
    };

    render() {
        const {
            theme: {
                colors: { background },
            },
        } = this.props;

        return (
            <View style={[styles.container, { backgroundColor: background }]}>
                <ScrollView>
                    <Banner
                        actions={[
                            {
                                label: 'Fix it',
                                onPress: () => {
                                    this.setState({ visible: false });
                                },
                            },
                            {
                                label: 'Learn more',
                                onPress: () => {
                                    this.setState({ visible: false });
                                },
                            },
                        ]}
                        image={({ size }) => (
                            <Image
                                source={require('../../assets/email-icon.png')}
                                style={{
                                    width: size,
                                    height: size,
                                }}
                            />
                        )}
                        visible={this.state.visible}
                    >
                        Two line text string with two actions. One to two lines is
                        preferable on mobile.
          </Banner>
                    <View style={styles.grid}>
                        {PHOTOS.map(uri => (
                            <View key={uri} style={styles.item}>
                                <Image source={{ uri }} style={styles.photo} />
                            </View>
                        ))}
                    </View>
                </ScrollView>
                <SafeAreaView>
                    <View>
                        <FAB
                            icon="visibility"
                            label={this.state.visible ? 'Hide banner' : 'Show banner'}
                            style={styles.fab}
                            onPress={() =>
                                this.setState(state => ({ visible: !state.visible }))
                            }
                        />
                    </View>
                </SafeAreaView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    item: {
        height: Dimensions.get('window').width / 2,
        width: '50%',
        padding: 4,
    },
    photo: {
        flex: 1,
        resizeMode: 'cover',
    },
    fab: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: 0,
        margin: 16,
    },
});

export default withTheme(BannerScreen);
