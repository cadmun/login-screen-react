import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { AntDesign } from "@expo/vector-icons";

export default function App() {
  const [username, setUsername] = React.useState("");
  const [organization, setOrganization] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: "#FFF",
            borderRadius: 20,
            paddingHorizontal: 12,
            paddingVertical: 12,
            marginTop: "10%",
          }}
        >
          <Image
            style={{
              tintColor: "#0742fa",
              width: 90,
              height: 90,
            }}
            source={require("./assets/logo.png")}
          />
        </View>
        <View style={{ flexDirection: "row", marginTop: 40 }}>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>Login to</Text>
          <Text style={{ fontSize: 25, fontWeight: "bold", color: "#0742fa" }}>
            UpToDate
          </Text>
        </View>
        <Text style={{ marginTop: 10, color: "#3e3e3f", fontSize: 14 }}>
          Trailer into at a glance
        </Text>
        {/* view para organizar as "views dos inputs" */}
        <View
          style={{
            width: "90%",
            flexDirection: "column",
            marginTop: 60,
            alignItems: "center",
          }}
        >
          {/* view input */}
          <View style={styles.inpView}>
            <Text style={styles.text}>User name</Text>
            <TextInput
              style={styles.input}
              onChangeText={setUsername}
              value={username}
            />
            <TouchableOpacity
              style={{ marginLeft: 10 }}
              onPress={() => {
                setUsername("");
              }}
            >
              <AntDesign name="close" size={18} color="#000" />
            </TouchableOpacity>
          </View>
          {/* view input */}
          <View style={[styles.inpView, { marginTop: 16 }]}>
            <Text style={styles.text}>Organization</Text>
            <TextInput
              style={[styles.input, { borderRightWidth: 0 }]}
              onChangeText={setOrganization}
              value={organization}
            />
          </View>
          {/* view input */}
          <View style={[styles.inpView, { marginTop: 16 }]}>
            <Text style={styles.text}>Password</Text>
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              onChangeText={setPassword}
              value={password}
            />
            <TouchableOpacity
              style={{ marginLeft: 10 }}
              onPress={() => {
                setUsername("");
              }}
            >
              <AntDesign name="eyeo" size={18} color="#000" />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
          }}
        >
          <TouchableOpacity style={styles.faceBtn}>
            <AntDesign
              name="camera"
              size={28}
              color="#000"
              style={{ marginRight: 9 }}
            />
            <Text style={{ color: "#000", fontSize: 20, fontWeight: "bold" }}>
              Face ID
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={{ color: "#FFF", fontSize: 20, fontWeight: "bold" }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{ marginTop: "25%" }}>
          <Text style={styles.forgotButton}>
            Forgot your password or user name?
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e9ecf5",
    alignItems: "center",
    justifyContent: "center",
  },
  inpView: {
    width: "100%",
    flexDirection: "row",
    borderRadius: 16,
    backgroundColor: "#FFF",
    height: 60,
    alignItems: "center",
  },
  text: {
    position: "absolute",
    fontSize: 15,
    color: "#b6b6b6",
    paddingHorizontal: 15,
    fontWeight: "bold",
  },
  input: {
    marginLeft: "31%",
    height: 25,
    width: "55%",
    fontSize: 21,
    fontWeight: "bold",
    borderRightWidth: 1,
    borderRightColor: '#b6b6b6', 
  },
  loginBtn: {
    width: "40%",
    marginLeft: "4%",
    borderRadius: 16,
    borderWidth: 1.5,
    height: 65,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
    borderColor: "#000",
    flexDirection: "row",
  },
  faceBtn: {
    width: "40%",
    marginRight: "4%",
    borderRadius: 16,
    borderWidth: 1.5,
    height: 65,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e9ecf5",
    borderColor: "#000",
    flexDirection: "row",
  },
  forgotButton: {
    fontWeight: "bold",
  },
});
