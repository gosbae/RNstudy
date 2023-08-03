import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  SectionList,
  Button,
  Alert,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
  Platform,
  Dimensions,
  ImageBackground,
  Image,
  FlatList,
} from 'react-native';
import {Person} from './src/screens/Person';
import * as D from './src/data';
import 'react-native-screens';
import {useClock} from './src/hooks/useClock';
import TopBar from './src/screens/TopBar';

const people: D.IPerson[] = D.makeArray(10).map(D.createRandomPerson);
function App() {
  const time = useClock();
  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <TopBar />
      <View style={{alignItems: 'flex-end'}}>
        <Text>
          {time.toLocaleDateString()} {time.toLocaleTimeString()}
        </Text>
      </View>
      <FlatList
        data={people}
        renderItem={({item}) => <Person person={item} />}
        keyExtractor={(item, index) => item.id}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: '#52d8f0df',
    flex: 1,
  },
  itemSeparator: {
    borderWidth: 1,
    borderColor: 'grey',
  },
  text: {fontSize: 20, color: 'rgba(255,255,255,1)'},
  regular: {fontFamily: 'DancingScript-Regular'},
  bold: {fontFamily: 'DancingScript-Bold'},
  medium: {fontFamily: 'DancingScript-Medium'},
  semibold: {fontFamily: 'DancingScript-SemiBold'},
});

export default App;
