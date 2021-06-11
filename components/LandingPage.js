import React from 'react';
import { AppRegistry, View, Text, StyleSheet, Button, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function LandingPage(props) {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.landingPageContainer}>
          {!props.user && <Text style={styles.title}> It's a great day for coffee ☕️ </Text>}
          {props.user && <Text style={styles.title}> Hello there, {props.user.firstName} </Text>}

          <View style={{ overflow: 'hidden', paddingBottom: 5 }}>
          <View elevation={5} style={[styles.navbar, styles.navbarShadow]}>

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
          </View>

          <Text style={styles.rewardsText}> Starbucks® Rewards </Text>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

            <Image source={require("../lib/images/Starbucks-Rewards-3.jpg")} style={styles.scrollImages} />
            <Image source={require("../lib/images/Starbucks-Rewards-2.jpg")} style={styles.scrollImages} />
            <Image source={require("../lib/images/Starbucks-Rewards-1.jpg")} style={[styles.scrollImages, {width: 350} ]} />

          </ScrollView>

          <Text style={styles.callToAction}>Join Starbucks Rewards to get more of what you love</Text>



          {!props.user && <TouchableOpacity onPress={props.signUp} style={styles.signUpButtonOne}>
          <Text style={styles.joinText}>Join now</Text>
          </TouchableOpacity>}

          <View style={{alignItems: "center", }}>
            <Image source={require("../lib/images/starbucks-img-1.jpeg")} style={styles.finalImages} />
            <Image source={require("../lib/images/starbucks-img-2.jpeg")} style={styles.finalImages} />
          </View>
        </View>
      </ScrollView>

      {!props.user && <TouchableOpacity onPress={props.signUp} style={styles.signUpButtonTwo}>
      <Text style={styles.joinTextTwo}>Join now</Text>
      </TouchableOpacity>}
      <View style={styles.footer}>

        <View style={styles.footerButton}>
          <Image source={require("../lib/images/starbucks-footer-icon-1.png")} style={styles.footerImages} />
          <Text style={[styles.footerText, {color: "#00a862"}]}> Home</Text>
        </View>
        <View style={styles.footerButton}>
          <Image source={require("../lib/images/starbucks-footer-icon-2.png")} style={styles.footerImages} />
          <Text style={styles.footerText}> Cards</Text>
        </View>
        <View style={styles.footerButton}>
          <Image source={require("../lib/images/starbucks-footer-icon-3.png")} style={styles.footerImages} />
          <Text style={styles.footerText}> Order</Text>
        </View>
        <View style={styles.footerButton}>
          <Image source={require("../lib/images/starbucks-footer-icon-4.png")} style={styles.footerImages} />
          <Text style={styles.footerText}>  Gift</Text>
        </View>
        <View style={styles.footerButton}>
          <Image source={require("../lib/images/starbucks-footer-icon-5.png")} style={styles.footerImages} />
          <Text style={styles.footerText}> Stores</Text>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  landingPageContainer: {
    paddingTop: 25,
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
    shadowRadius: 6,
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
    fontWeight: "bold",
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
    paddingLeft: "5%",
    paddingRight: "5%"
  },
  signUpButtonOne: {
    color: "#fff",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'grey',
    width: "30%",
    margin: 10,
    marginTop: "7%",
    marginLeft: "5%"
  },
  signUpButtonTwo: {
    backgroundColor: "#00a862",
    borderRadius:100,
    borderWidth: 0,
    borderColor: 'white',
    width: "40%",
    position: 'absolute',
    bottom: "15%",
    right: "5%"
  },
  joinText: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    padding: "10%",
    paddingTop: "5%",
    marginTop: "5%",
    color: "#1f1f1f"
  },
  joinTextTwo: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    padding: "10%",
    color: "white"
  },
  finalImages: {
    height: 300,
    width: "90%",
    margin: "5%",
    marginLeft: "10%",
    marginRight: "10%"
  },
  footer: {
    width: "100%",
    position: "absolute",
    backgroundColor: "#f7f7f7",
    bottom: 0,
    height: "10%",
    paddingTop: "2%",
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  footerImages: {
    paddingTop: "40%",
    paddingBottom: "30%",
    height: "70%",
    width: 45
  },
  footerText: {
  },
  footerButton: {
  }
});
