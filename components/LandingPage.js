import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function LandingPage(props) {
  return (
    <View>
      <Button
        title="Sign-In"
        onPress={props.signIn}
      />
      <Button
        title="Sign-Up"
        onPress={props.signUp}
      />
    </View>
  );
}
