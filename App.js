import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { FontAwesome5 } from "@expo/vector-icons";
import Constants from "expo-constants";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="light" />

      <Image
      style={{width: 500, height: 250, marginLeft: 0}}
      source= {{uri: "https://honeysanime.com/wp-content/uploads/2020/07/Re-Zero-MI-Credit-Card-1-500x317.png"}}></Image>


      <View style={styles.content}>
        <View style={styles.textWrapper}>
          <Text style={styles.hiText}>IAMXPH</Text>
          <Text style={styles.userText}>CREATED BY: MARK OCAMPO</Text>
          <Text style={styles.userText}>Password Login </Text>
        </View>

        <View style={styles.form}>
    
          <FontAwesome5 name="lock" style={styles.iconLock} />

          <TextInput
            style={styles.inputPassword}
            keyboardType="numeric"
            secureTextEntry={true}
            autoFocus={true}
            placeholder="PASSWORD"
            placeholderTextColor="#929292"
          />

          <TouchableOpacity style={styles.buttonLogin}>
            <Text style={styles.buttonLoginText}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.action}>
        <TouchableOpacity style={styles.buttonLogin}>
            <Text style={styles.buttoninText}>Reset Code</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonLogin}>
            <Text style={styles.buttoninText}>Generate Code</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}


const TEXT = {
  color: "#fff",
  textAlign: "center",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: Constants.statusBarHeight,
  },
  content: {
    paddingHorizontal: 30,
  },
  textWrapper: {
    marginTop: 60,
    marginBottom: 30,
  },
  hiText: {
    ...TEXT,
    fontSize: 50,
    lineHeight: 50,
    fontWeight: "bold",
  },
  userText: {
    ...TEXT,
    fontSize: 16,
    lineHeight: 30,
  },
  form: {
    marginBottom: 30,
  },
  iconLock: {
    color: "#929292",
    position: "absolute",
    fontSize: 16,
    top: 22,
    left: 22,
    zIndex: 10,
  },
  inputPassword: {
    height: 60,
    borderRadius: 30,
    paddingHorizontal: 30,
    fontSize: 20,
    color: "#929292",
    backgroundColor: "#fff",
    textAlign: "center",
    textAlignVertical: "center",
  },
  buttonLogin: {
    height: 50,
    borderRadius: 25,
    backgroundColor: "#8d015a",
    justifyContent: "center",
    marginTop: 15,
  },
  buttonLoginText: {
    ...TEXT,
  },
  action: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    height: 60,
    borderRadius: 25,
    backgroundColor: "#00ff66",
    justifyContent: "center",
    marginTop: 15,
  },
  buttoninText: {
    ...TEXT,
  },
action: {
  flexDirection: "row",
  justifyContent: "space-between",
},

});
