import React from 'react';
import {Text, View, Image, Alert} from 'react-native';
import * as D from '../data';
import {styles} from './Person.style';
import moment from 'moment-with-locales-es6';
import {Avatar} from '../components/Avatar';
import {IconText} from '../components/IconText';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
moment.locale('ko');

export type PersonProps = {
  person: D.IPerson;
};

const avatarPressed = () => {
  Alert.alert('avatar pressed.');
};
const deletePressed = () => {
  Alert.alert('delete pressed.');
};
const countIconPressed = (name: string) => {
  Alert.alert(`${name} pressed.`);
};
export const Person = ({person}: PersonProps) => {
  return (
    <View style={[styles.view]}>
      <View style={[styles.leftView]}>
        <Avatar
          imageStyle={[styles.avatar]}
          uri={person.avatar}
          onPress={avatarPressed}
          size={50}
        />
      </View>
      <View style={[styles.rightView]}>
        <Text style={[styles.name]}>{person.name}</Text>
        <Text style={[styles.email]}>{person.email}</Text>

        <View style={[styles.dateView]}>
          <Text style={[styles.text]}>
            {moment(person.createdDate).startOf('day').fromNow()}
          </Text>
          <Icon
            name="trash-can-outline"
            size={26}
            color={'red'}
            onPress={deletePressed}
          />
        </View>
        <Text
          ellipsizeMode="tail"
          numberOfLines={3}
          style={[styles.text, styles.comments]}>
          {person.comments}
        </Text>
        <Image
          style={{width: 'auto', height: 150, marginTop: 15}}
          source={{uri: person.image}}
        />
        <View style={[styles.countsView]}>
          <IconText
            viewStyle={styles.touchableIcon}
            name="comment"
            onPress={() => countIconPressed('comment')}
            size={24}
            color={'black'}
            textStyle={styles.iconText}
            text={person.counts.comment}
          />
          <IconText
            viewStyle={styles.touchableIcon}
            name="refresh"
            onPress={() => countIconPressed('retweet')}
            size={24}
            color={'purple'}
            textStyle={styles.iconText}
            text={person.counts.retweet}
          />
          <IconText
            viewStyle={styles.touchableIcon}
            name="heart"
            onPress={() => countIconPressed('heart')}
            size={24}
            color={'red'}
            textStyle={styles.iconText}
            text={person.counts.heart}
          />
        </View>
      </View>
    </View>
  );
};
