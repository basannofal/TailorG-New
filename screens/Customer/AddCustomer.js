import React, { useState, useCallback } from "react";
import {
  ScrollView,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
} from "react-native";
import { RadioButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "../../styles/style";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";
import ConfirmDialog from "../../components/ConfirmDialog";

const AddCustomer = ({ route }) => {
  const id = route.params.id;
  //State
  const [checked, setChecked] = useState("male");
  const [cname, setcname] = useState("");
  const [cphone, setcphone] = useState("");
  const [ccity, setccity] = useState("");
  const [caddress, setcaddress] = useState("");
  const [cemail, setcemail] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (cname.trim() === "") {
      errors.cname = "Customer Name is required";
    }

    if (cphone !== '' && !/^\d{10}$/.test(cphone)) {
      errors.cphone = "Please enter a valid 10-digit mobile number";
    }

    if (ccity !== '' && !/^\d{6}$/.test(ccity)) {
      errors.ccity = "Please enter a valid 6-digit pincode";
    }

    if (cemail !== '' && !/^\S+@\S+\.\S+$/.test(cemail)) {
      errors.cemail = "Please enter a valid email address";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const navigation = useNavigation();

  const addCust = () => {
    if(validateForm()){
      toggleModalVisibility()
    }
  }

  const toggleModalVisibility = useCallback(() => {
    setModalVisible((prevVisible) => !prevVisible);
  }, []);

  const postdata = async () => {
    toggleModalVisibility();

    try {
      const CustomerData = {
        cname,
        cphone,
        ccity,
        caddress,
        cemail,
        checked,
      };

      const response = await axios.post(
        `${process.env.EXPO_PUBLIC_API_URL}/addcustomer/${id}`,
        CustomerData
      );

      if (response.status === 200) {
        navigation.navigate("Home", {
          id: id,
        });
      } else {
        window.alert("Add Customer Failed");
      }
    } catch (e) {
      window.alert("Add Customer Failed");
      console.log(e);
    }
  };

  const handleConfirm = () => {
      postdata();
      toggleModalVisibility();
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="height">
      <ScrollView
        style={{ backgroundColor: "#fff" }}
        showsVerticalScrollIndicator={false}
      >
        <ConfirmDialog
          visible={isModalVisible}
          onConfirm={handleConfirm}
          onCancel={() => setModalVisible(false)}
          message="Are you sure?"
          title={cname}
          btnname="Add"
        />

        <View style={[styles.headerwithline, { flexDirection: "row" }]}>
          <View style={{ width: responsiveWidth(12) }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialIcons
                name="arrow-back"
                size={23}
                color="black"
                style={{
                  alignSelf: "center",
                  marginHorizontal: responsiveWidth(1),
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ width: responsiveWidth(80) }}>
            <Text
              style={{
                alignSelf: "center",
                fontSize: responsiveFontSize(2.5),
                fontWeight: "bold",
              }}
            >
              Add New Customer
            </Text>
          </View>
        </View>

        <View style={styles.line70}></View>

        <View style={[styles.form, { marginTop: responsiveHeight(4) }]}>
          <View style={styles.inputfield}>
            <Text style={styles.label}>Customer Name</Text>
            <TextInput
              placeholder="Customer Name"
              style={[styles.input, { borderRadius: responsiveWidth(2) }]}
              value={cname}
              onChangeText={(e) => setcname(e)}
            />
            {validationErrors.cname && (
              <Text style={styles.errorText}>{validationErrors.cname}</Text>
            )}
          </View>

          <View style={styles.inputfield}>
            <Text style={styles.label}>Mobile Number</Text>
            <TextInput
              placeholder="Mobile Number"
              style={[styles.input, { borderRadius: responsiveWidth(2) }]}
              maxLength={10}
              keyboardType="numeric"
              value={cphone}
              onChangeText={(e) => {setcphone(e); validationErrors.cphone = ''}}
            />
            {validationErrors.cphone && (
              <Text style={styles.errorText}>{validationErrors.cphone}</Text>
            )}
          </View>

          <View style={styles.inputfield}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              placeholder="Email"
              style={[styles.input, { borderRadius: responsiveWidth(2) }]}
              value={cemail}
              onChangeText={(e) => {setcemail(e); validationErrors.cemail = ''}}
            />
            {validationErrors.cemail && (
              <Text style={styles.errorText}>{validationErrors.cemail}</Text>
            )}
          </View>

          <View style={styles.inputfield}>
            <Text style={styles.label}>Address</Text>
            <TextInput
              placeholder="Address"
              style={[styles.input, { borderRadius: responsiveWidth(2) }]}
              numberOfLines={3}
              textAlignVertical="top"
              multiline={true}
              value={caddress}
              onChangeText={(e) => setcaddress(e)}
            />
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              paddingVertical: 20,
            }}
          >
            <RadioButton
              value="male"
              status={checked === "male" ? "checked" : "unchecked"}
              onPress={() => setChecked("male")}
              color="#56BC1F"
              uncheckedColor="#56BC1F"
            />
            <Text
              style={{
                textAlign: "center",
                marginTop: 6,
                opacity: 0.8,
                fontSize: responsiveFontSize(2),
              }}
            >
              Male
            </Text>

            <View style={{ marginLeft: 10 }}>
              <RadioButton
                value="female"
                status={checked === "female" ? "checked" : "unchecked"}
                onPress={() => setChecked("female")}
                color="#56BC1F"
                uncheckedColor="#56BC1F"
              />
            </View>
            <Text
              style={{
                textAlign: "center",
                marginTop: 6,
                opacity: 0.8,
                fontSize: responsiveFontSize(2),
              }}
            >
              Female
            </Text>
          </View>

          <View style={styles.inputfield}>
            <Text style={styles.label}>Pincode</Text>
            <TextInput
              placeholder="Pincode"
              style={[styles.input, { borderRadius: responsiveWidth(2) }]}
              value={ccity}
              keyboardType="numeric"
              maxLength={6}
              onChangeText={(e) => {setccity(e); validationErrors.ccity = ''}}
            />
            {validationErrors.ccity && (
              <Text style={styles.errorText}>{validationErrors.ccity}</Text>
            )}
          </View>
        </View>
        <View style={[{ marginTop: responsiveHeight(3) }]}>
          {cname === "" ? (
            <TouchableOpacity
              style={[
                styles.onlybtn,
                { marginBottom: responsiveHeight(5), opacity: 0.5 },
              ]}
              disabled
            >
              <Text style={styles.onlybtntext}>Add</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[styles.onlybtn, { marginBottom: responsiveHeight(5) }]}
              onPress={addCust}
            >
              <Text style={styles.onlybtntext}>Add</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddCustomer;
