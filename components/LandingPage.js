import React from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function LandingPage(props) {
  return (
    <View style={styles.landingPageContainer}>
      {!props.user && <Text style={styles.title}> It's a great day for coffee ☕️ </Text>}
      {props.user && <Text style={styles.title}> Hello there, {props.user.firstName} </Text>}

      <View elevation={0} style={[styles.navbar, styles.navbarShadow]}>

        {!props.user && <TouchableOpacity onPress={props.signIn} style={styles.navbar}>
          <Image style={styles.profileIcon} source={require("../lib/icons/profile.png")} />
          <Text style={styles.navText}> Sign in </Text>
        </TouchableOpacity>}

        {props.user && <TouchableOpacity onPress={props.logout} style={styles.navbar}>
          <Image style={styles.profileIcon} source={require("../lib/icons/profile.png")} />
          <Text style={styles.navText}> Sign out </Text>
        </TouchableOpacity>}

        <View style={styles.navbar}>
          <Image style={styles.mailIcon} source={require("../lib/icons/mail.png")} />
          <Text style={styles.navText}> Inbox </Text>
        </View>

        <View style={styles.rightAlign}>
          <Image style={styles.gearIcon} source={require("../lib/icons/gear.png")} />
        </View>

      </View>

      <Text style={styles.rewardsText}> Starbucks® Rewards </Text>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

        <Image source={require("../lib/images/Starbucks-Rewards-3.jpg")} style={styles.scrollImages} />
        <Image source={require("../lib/images/Starbucks-Rewards-2.jpg")} style={styles.scrollImages} />
        <Image source={require("../lib/images/Starbucks-Rewards-1.jpg")} style={[styles.scrollImages, {width: 350} ]} />

      </ScrollView>
      <Text style={styles.callToAction}>Join Starbucks Rewards to get more of what you love</Text>
      <Button title="Sign-Up" onPress={props.signUp } />
        <Button
          title="Sign-Up"
          onPress={props.signUp}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  landingPageContainer: {
    paddingTop: 25
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    paddingLeft: 10
  },
  navText: {
    fontSize: 18,
    fontWeight: "300"
  },
  profileIcon: {
    height: 25,
    width: 40,
    opacity: 0.5,
    marginTop: -2
  },
  mailIcon: {
    height: 22,
    width: 28,
    opacity: 0.5
  },
  gearIcon: {
    height: 25,
    width: 30,
    opacity: 0.5,
  },
  navbar: {
    flexDirection: "row",
    paddingTop: "5%",
    paddingLeft: "1%",
    paddingBottom: "3%",
    paddingRight: "3%"
  },
  navbarShadow: {
    paddingBottom: "1%",
    backgroundColor:'#FFF',
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {
      height: 6,
      width: 0
    }
  },
  rightAlign: {
    flexDirection: "row",
    paddingTop: "5%",
    paddingLeft: "3%",
    width: "40%",
    justifyContent: "flex-end"
  },
  rewardsText: {
    color: "#6a6e75",
    fontWeight: "800",
    marginTop: "5%",
    marginLeft: "5%",
    opacity: 0.8
  },
  scrollImages: {
    height: 200,
    width: 300,
    margin: 20
  },
  callToAction: {
    color: "#1f1f1f",
    fontSize: 25,
    fontWeight: "400",
    paddingLeft: "5%"
  }
});
