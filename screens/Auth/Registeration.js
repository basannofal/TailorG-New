import {
  Text,
  View,
  Button,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../../styles/style";
import { Checkbox } from "react-native-paper";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import axios from "axios";

const Registeration = () => {
  const [checked, setChecked] = React.useState(false);

  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [phone, setphone] = useState("");
  const [sname, setsname] = useState("");

  // Validation error state for each field
  const [fnameError, setFnameError] = useState("");
  const [lnameError, setLnameError] = useState("");
  const [snameError, setSnameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");

  const navigation = useNavigation();

  //Registration Process
  const postdata = async () => {
    setfname(fname.trim());
    setlname(lname.trim());
    setemail(email.trim());
    setpass(pass.trim());
    setphone(phone.trim());
    setsname(sname.trim());

    // Validate each field
    if (!fname) {
      setFnameError("First Name is required");
      return;
    }

    if (!lname) {
      setLnameError("Last Name is required");
      return;
    }

    if (!sname) {
      setSnameError("Shop Name is required");
      return;
    }

    if (!phone) {
      setPhoneError("Contact Number is required");
      return;
    }

    if (!email) {
      setEmailError("Email is required");
      return;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setEmailError("Invalid email address");
      return;
    }

    if (!pass) {
      setPassError("Password is required");
      return;
    } else if (pass.length < 6) {
      setPassError("Password must be at least 6 characters long");
      return;
    }

    try {
      const userData = { fname, lname, sname, email, pass, phone };

      //check duplicate email
      const emailExistsResponse = await axios.get(
        `${process.env.EXPO_PUBLIC_API_URL}/checkemail/${email}`
      );

      if (
        emailExistsResponse.status === 200 &&
        emailExistsResponse.data.exists
      ) {
        setEmailError("Email already exists");
        return;
      }

      // Registration Process
      const response = await axios.post(
        `${process.env.EXPO_PUBLIC_API_URL}/registration`,
        userData
      );

      if (response.status === 200) {
        navigation.navigate("Login");
      } else {
        window.alert("Email Already Exist");
      }
    } catch (error) {
      console.error("Error during registration request:", error);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.loginHead}>
          <View style={styles.loginHeadText}>
            <Text style={styles.headingtext}>Getting Started</Text>
            <Text style={styles.desctext}>Create a Account To Continue</Text>
          </View>
          <View style={styles.loginHeadImg}>
            <Image
              style={styles.loginimag}
              source={require("../../assets/images/auth/scissor2.png")}
            />
          </View>
        </View>
        <View style={styles.form}>
          <View style={styles.view_Grid}>
            <View
              style={[
                styles.inputfield,
                {
                  width: responsiveWidth(40),
                  marginRight: responsiveWidth(4.2),
                },
              ]}
            >
              <Text style={styles.label}>First Name <Text style={styles.errcolor}>*</Text></Text>
              <TextInput
                style={styles.input}
                placeholder="First Name"
                value={fname}
                onChangeText={(e) => {
                  setfname(e);
                  setFnameError("");
                }}
              ></TextInput>
              <Text style={styles.errorText}>{fnameError}</Text>
            </View>
            <View style={[styles.inputfield, { width: responsiveWidth(40) }]}>
              <Text style={styles.label}>Last Name <Text style={styles.errcolor}>*</Text></Text>
              <TextInput
                style={styles.input}
                placeholder="Last Name"
                value={lname}
                onChangeText={(e) => {
                  setlname(e);
                  setLnameError("");
                }}
              ></TextInput>
              <Text style={styles.errorText}>{lnameError}</Text>
            </View>
          </View>

          <View style={styles.inputfield}>
            <Text style={styles.label}>Shop Name  <Text style={styles.errcolor}>*</Text></Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Your Shop Name"
              value={sname}
              onChangeText={(e) => {
                setsname(e);
                setSnameError("");
              }}
            ></TextInput>
            <Text style={styles.errorText}>{snameError}</Text>
          </View>

          <View style={styles.inputfield}>
            <Text style={styles.label}>Contact Number <Text style={styles.errcolor}>*</Text></Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Your Contact Number"
              value={phone}
              maxLength={10}
              onChangeText={(e) => {
                setphone(e);
                setPhoneError("");
              }}
              keyboardType="numeric"
            ></TextInput>
            <Text style={styles.errorText}>{phoneError}</Text>
          </View>

          <View style={styles.inputfield}>
            <Text style={styles.label}>Email <Text style={styles.errcolor}>*</Text></Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Your Email"
              value={email}
              onChangeText={(e) => {
                setemail(e);
                setEmailError("");
              }}
            ></TextInput>
            <Text style={styles.errorText}>{emailError}</Text>
          </View>
          <View style={styles.inputfield}>
            <Text style={styles.label}>Password <Text style={styles.errcolor}>*</Text></Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Your Password"
              value={pass}
              onChangeText={(e) => {
                setpass(e);
                setPassError("");
              }}
              secureTextEntry={true}
            ></TextInput>
            <Text style={styles.errorText}>{passError}</Text>
          </View>

          <View style={styles.agreegroup}>
            <Checkbox
              color="#56BC1F"
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Text style={{ paddingRight: 40 }}>
              I agree to the{" "}
              <Text style={{ color: "#56BC1F" }}>Terms of Service</Text> and{" "}
              <Text style={{ color: "#56BC1F" }}>Privacy policy</Text>
            </Text>
          </View>

          <View style={{ marginTop: 20 }}>
            {checked == false ? (
              <TouchableOpacity
                style={[styles.onlybtn, { opacity: 0.3 }]}
                disabled
              >
                <Text style={styles.onlybtntext}>Create Account</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.onlybtn} onPress={postdata}>
                <Text style={styles.onlybtntext}>Create Account</Text>
              </TouchableOpacity>
            )}
          </View>

          <View
            style={[
              styles.bottom,
              {
                marginBottom: responsiveHeight(1),
                marginTop: responsiveHeight(4),
              },
            ]}
          >
            <Text style={styles.bottomText}>Already have an Account ? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.link}>Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Registeration;
