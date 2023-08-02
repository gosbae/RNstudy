import React from 'react';
import {Image} from 'react-native';
import type {ImageStlye, StyleProp} from 'react-native';
import {TouchableView} from './TouchableView';
import type {TouchableViewProps} from './TouchableView';

export type AvatarProps = TouchableViewProps & {
  uri: string;
  size: number;
  imageStyle?: StyleProp<ImageStlye>;
};

export const Avatar = ({
  uri,
  size,
  imageStyle,
  ...touchalbeViewProps
}: AvatarProps) => {
  return (
    <TouchableView {...touchalbeViewProps}>
      <Image
        source={{uri}}
        style={[
          imageStyle,
          {width: size, height: size, borderRadius: size / 2},
        ]}
      />
    </TouchableView>
  );
};
