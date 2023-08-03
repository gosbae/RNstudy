import React, {useCallback} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import * as D from '../data';

export type TopBarProps = {};

const TopBar = () => {
  const add = useCallback(() => {}, []);
  const deleteAll = useCallback(() => {}, []);
  return (
    <View style={styles.topBar}>
      <Text style={[styles.textButton]} onPress={() => add()}>
        add
      </Text>
      <Text style={[styles.textButton]} onPress={() => deleteAll()}>
        delete all
      </Text>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-between',
    backgroundColor: 'lightblue',
  },
  textButton: {
    color: 'white',
    fontSize: 20,
  },
});
