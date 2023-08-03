import React from 'react';
import {useState, useCallback} from 'react';
import {Text, View, Image, Alert} from 'react-native';
import * as D from '../data';
import {styles} from '../copy/Person.style';
import moment from 'moment-with-locales-es6';
import {Avatar} from '../components/Avatar';
import {IconText} from '../components/IconText';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PersonIcons from './PersonIcons';
moment.locale('ko');

export type PersonProps = {
  person: D.IPerson;
};

export const Person = ({person: initialPerson}: PersonProps) => {
  // const [comment, setComment] = useState(0);
  // const [retweet, setRetweet] = useState(0);
  // const [heart, setHeart] = useState(0);
  // const commentPressed = useCallback(() => setComment(comment + 1), [comment]);
  // const retweetPressed = useCallback(() => setRetweet(retweet + 1), [retweet]);
  // const heartPressed = useCallback(() => setHeart(heart + 1), [heart]);
  const [person, setPerson] = useState({
    ...initialPerson,
    counts: {comment: 0, retweet: 0, heart: 0},
  });
  const avatarPressed = useCallback(() => {
    Alert.alert('avatar pressed.');
  }, []);
  const deletePressed = useCallback(() => {
    Alert.alert('delete pressed.');
  }, []);

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
        <PersonIcons person={person} setPerson={setPerson} />

      </View>
    </View>
  );
};
