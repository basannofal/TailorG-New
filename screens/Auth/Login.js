import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../../styles/style";
import { responsiveHeight } from "react-native-responsive-dimensions";
import axios from "axios";
import { AuthContext } from "../../middleware/AuthReducer";

const Login = () => {
  const [email, setemail] = useState();
  const [pass, setpass] = useState();

  const navigation = useNavigation();

  // Globel State Management
  const {  loginState, authContext } = React.useContext(AuthContext);
  

  // Login Submit Data
  const Postdata = async () => {
    try {
      const userData = { email, pass };
      const response = await axios.post(
        `${process.env.EXPO_PUBLIC_API_URL}/login`,
        userData
      );
      
      if (response.status === 200) {
        const id = response.data[0].id;
        loginhandler(id, email);
      } else {
        console.log(response);
      }
    } catch (error) {
      window.alert(error.response.data.msg)
    }

  };

  // login Handler
  const loginhandler = (id, email) => {
    authContext.signin(id, email);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
   

      <View style={[styles.container, { height: responsiveHeight(100) }]}>
        <View style={styles.loginHead}>
          <View style={styles.loginHeadText}>
            <Text style={styles.headingtext}>Welcome Back</Text>
            <Text style={styles.desctext}>Login To Continue</Text>
          </View>
          <Image
            style={styles.loginimag2}
            source={require("../../assets/images/auth/scissor1.png")}
          />
        </View>
        <View style={styles.form}>
          <View style={styles.inputfield}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Your Email"
              value={email}
              onChangeText={(e) => setemail(e)}
            ></TextInput>
          </View>
          <View style={styles.inputfield}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Your Password"
              value={pass}
              onChangeText={(e) => setpass(e)}
              secureTextEntry={true}
            ></TextInput>
          </View>

          <View style={{ marginTop: responsiveHeight(3) }}>
            <TouchableOpacity style={styles.onlybtn} onPress={Postdata}>
              <Text style={styles.onlybtntext}>Login</Text>
            </TouchableOpacity>
            <Text
              style={[
                styles.link,
                { textAlign: "center", marginTop: responsiveHeight(2) },
              ]}
            >
              Forgot Password?
            </Text>
          </View>

          <View style={[styles.bottom, { marginTop: responsiveHeight(15) }]}>
            <Text style={styles.bottomText}>Don't have an Account ? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Registeration")}>
              <Text style={styles.link}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
