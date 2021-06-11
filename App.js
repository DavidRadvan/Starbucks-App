import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const initialState = {
    user: false,
    mode: 'landingPage'
  }

  const [state, setState] = useState(initialState);

  return (
    <View style={styles.container}>
      {state.mode === "landingPage" &&  <LandingPage
        signIn={() => setState({ ...state, mode: "signIn" })}
        signUp={() => setState({ ...state, mode: "signUp" })}
        logout={() => setState({ ...state, user: false })}
        user={state.user}
      />}
      {state.mode === "signIn" &&  <SignIn
        backHome={() => setState({ ...state, mode: "landingPage" })}
        setUser={(user) => setState({...state, mode: "landingPage", user: user})}
      />}
      {state.mode === "signUp" &&  <SignUp
        backHome={() => setState({ ...state, mode: "landingPage" })}
       />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 70
  }
});
