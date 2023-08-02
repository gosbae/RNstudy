import React from 'react';
import type {FC} from 'react';
import * as D from '../data';
import {Text} from 'react-native';

export type PersonProps = {
 person: D.IPerson;
};

export const Person = ({person}: PersonProps) => {
  return <Text>{JSON.stringify(person, null, 2)}</Text>;
}
