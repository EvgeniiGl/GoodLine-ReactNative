import React from 'react';
import { TextInput, View } from 'react-native';

/**
 * обернуть в компонент redux-form Field
 */
export default function ComponentTextInput(props) {
  const { input, ...inputProps } = props;
  return (
    <View>
      <TextInput
        {...inputProps}
        onChangeText={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        value={input.value}
        />
    </View>
  );
}