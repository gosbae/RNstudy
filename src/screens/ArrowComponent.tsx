import React from 'react';
import {Text, View} from 'react-native';
import * as D from '../data';

const person = D.createRandomPerson();
export const ArrowComponent = () => {
  return <Text>{JSON.stringify(person, null, 2)}</Text>;
};

