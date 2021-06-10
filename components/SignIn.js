import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Alert } from 'react-native';

export default function SignIn(props) {

  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");

  const validate = function() {

    if (email === "" || password === "") {
      Alert.alert("Error", "Field left blank")
      return;
    }

    // save()
  }

  return (
    <View>
      <Button
        title="Back to Home"
        onPress={props.backHome}
      />
      <TextInput
        value={email}
        onChangeText={onChangeEmail}
        placeholder="Email"
      />
      <TextInput
        value={password}
        onChangeText={onChangePassword}
        placeholder="Password"
      />
      <Button
        title="Submit"
        onPress={() => validate()}
      />
    </View>
  );
}
