import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import type {StyleProp, ViewStyle} from 'react-native';
type TouchableOpacityProps = React.ComponentProps<typeof TouchableOpacity>;

export type TouchableViewProps = TouchableOpacityProps & {
  viewStyle?: StyleProp<ViewStyle>;
};

export const TouchableView = ({
  children,
  viewStyle,
  ...touchableProps
}: TouchableViewProps) => {
  return (
    <TouchableOpacity {...touchableProps}>
      <View style={viewStyle}>{children}</View>
    </TouchableOpacity>
  );
};
