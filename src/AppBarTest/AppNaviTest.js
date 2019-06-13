import React from "react";
import { View, Text, Button } from "react-native";
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

class HomeScreen extends React.Component {
	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Home Screen</Text>
				<Button
					title="Go to Details"
					onPress={() => {
						this.props.navigation.dispatch(StackActions.reset({
							index: 0,
							actions: [
								NavigationActions.navigate({ routeName: 'Details' })
							],
						}))
					}}
				/>
			</View>
		);
	}
}

class DetailsScreen extends React.Component {
	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Details Screen</Text>
			</View>
		);
	}
}

const MainNavigator = createStackNavigator({
	Home: {
		screen: HomeScreen,
	},
	Details: {
		screen: DetailsScreen,
	},
}, {
		initialRouteName: 'Home',
	});

const AppNaviTest = createAppContainer(MainNavigator);

export default AppNaviTest;