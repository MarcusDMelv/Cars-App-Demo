import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
// TODO import Header component
import Header from'./src/components/Header';
import CarList from "./src/components/CarList";
import Item from "./src/components/Item";
// TODO Root {parent}
// parent giving child info - props
export default function App() {
  return (
      <View style={{flex:1}}>
        <Header titleOfApp= {'Car App'}/>
        <CarList/>
      </View>
  );
};


