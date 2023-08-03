import React, {useCallback} from 'react';
import type {Dispatch, SetStateAction} from 'react';
import {View} from 'react-native';
import {styles} from '../copy/Person.style';
import {IconText} from '../components/IconText';
import * as D from '../data';

export type PersonIconsProps = {
  person: D.IPerson;
  setPerson: Dispatch<SetStateAction<D.IPerson>>;
};

const PersonIcons = ({person, setPerson}: PersonIconsProps) => {
  const commentPressed = useCallback(() => {
    setPerson(person => {
      const {comment} = person.counts;
      return {...person, counts: {...person.counts, comment: comment + 1}};
    });
  }, []);
  const retweetPressed = useCallback(() => {
    setPerson(person => {
      const {retweet} = person.counts;
      return {...person, counts: {...person.counts, retweet: retweet + 1}};
    });
  }, []);
  const heartPressed = useCallback(() => {
    setPerson(person => {
      const {heart} = person.counts;
      return {...person, counts: {...person.counts, heart: heart + 1}};
    });
  }, []);

  return (
    <View style={[styles.countsView]}>
      <IconText
        viewStyle={styles.touchableIcon}
        onPress={() => commentPressed()}
        name="comment"
        size={24}
        color="blue"
        textStyle={styles.iconText}
        text={person.counts.comment}
      />
      <IconText
        viewStyle={styles.touchableIcon}
        onPress={() => retweetPressed()}
        name="refresh"
        size={24}
        color="purple"
        textStyle={styles.iconText}
        text={person.counts.retweet}
      />
      <IconText
        viewStyle={styles.touchableIcon}
        onPress={() => heartPressed()}
        name="heart"
        size={24}
        color="red"
        textStyle={styles.iconText}
        text={person.counts.heart}
      />
    </View>
  );
};

export default PersonIcons;