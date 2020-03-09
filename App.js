import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import SearchInput from './components/SearchInput';
import TabBar from './components/TabBar';

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Virus Free Zone" />
      <Text style={{textAlign: 'center'}}>Handshake free zone!</Text>
      <SearchInput />
      <TabBar />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
