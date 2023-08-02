import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import * as D from '../data';

const title = 'CopyMe';

export default function CopyMe() {
  return (
    <View style={[styles.view]}>
      <Text style={[styles.text]}>{title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  view: {padding: 5, backgroundColor: 'blue'},
  text: {fontSize: 20, color: 'white'},
});
