import React from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';

import styles from './styles';

const InputTextNormal = ({ borderRadius , onPress}) => (
  <View style={styles.container}>
    <TextInput
      borderRadius={borderRadius}
      style={styles.inputField}
      underlineColorAndroid="transparent"
      onPress = {onPress} 
    />
  </View>
);

InputTextNormal.propTypes = {
  borderRadius: PropTypes.number,
  onPress : PropTypes.func,
};

export default InputTextNormal;
