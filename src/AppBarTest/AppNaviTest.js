import React from "react";
import { View, Text, Button } from "react-native";
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';

class HomeScreen extends React.Component {

	// static navigationOptions = {
	// 	title: 'Home',
	// 	headerBackTitle: null
	// };

	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Home Screen</Text>
				<Button
					title="Go to Details xx!!"
					// onPress={() => {
					// 	this.props.navigation.dispatch(StackActions.reset({
					// 		index: 0,
					// 		actions: [
					// 			NavigationActions.navigate({ routeName: 'Details' })
					// 		],
					// 	}))
					// }}
					onPress={() => this.props.navigation.navigate('Details')}
				/>
			</View>
		);
	}
}

class DetailsScreen extends React.Component {

	// static navigationOptions = {
	// 	title: 'Detail',
	// 	headerBackTitle:null
	// };

	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Details Screen</Text>
				<Button
					title="Go to Home"
					onPress={() => this.props.navigation.navigate('Home')}
				/>
			</View>
		);
	}
}

const MainNavigator = createStackNavigator(
	{
		Home: { 
			screen: HomeScreen, 
			navigationOptions: () => ({
				title: `A`,
				headerBackTitle: null
			}),
		},
		Details: { 
			screen: DetailsScreen, 
			navigationOptions: () => ({
				title: `B`,
				
			}),
		},
	},
	{
		initialRouteName: 'Home',
		//headerMode: 'none'
	}
);

const AppNaviTest = createAppContainer(MainNavigator);

export default AppNaviTest;