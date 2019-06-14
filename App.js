import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';
// import AppNavigator from "./src/AppNavigator";
// import AppNaviTest from "./src/AppBarTest/AppNaviTest";
import AppNatigator from "./src/AppNatigator";

export default function App() {
  return (
    <PaperProvider>
      <AppNatigator />
    </PaperProvider>
  );
}


