import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import SearchInput from './components/SearchInput';
import TabBar from './components/TabBar';
import LickHere from './components/LickHere';
import Verse from './components/Verse';

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Virus Giver" />
      <Verse verse="Freely ye have received, freely give. Matthew 10:8b KJV" />
      <SearchInput />
      <LickHere />
      <TabBar />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
