import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function SignIn(props) {
  return (
    <View>
    <Button
      title="Back to Home"
      onPress={props.backHome}
    />
      <Text> Sign In </Text>
    </View>
  );
}
