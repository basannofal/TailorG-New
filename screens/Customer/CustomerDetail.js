import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Linking,
  Modal,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Fontisto } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../../styles/style";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useFonts } from "expo-font/build/FontHooks";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const CustomerDetail = ({ route }) => {
  // alert
  const alertvisible = () => {
    setisalertvisible(!isalertvisible);
  };

  // contact info

  const Whatsapp = (e) => {
    Linking.openURL(`whatsapp://send?text=Hello&phone=+91${e}`);
  };

  const Phone = (e) => {
    Linking.openURL(`tel:${e}`);
  };

  /// variable declaration

  const [isalertvisible, setisalertvisible] = useState(false);
  const [customer, setcustomer] = useState([]);
  const [loading, setloading] = useState(true);

  // Get Data
  const getdata = async () => {
    try {
      const id = route.params.id;
      const custId = route.params.obid;

      const response = await axios.get(
        `${process.env.EXPO_PUBLIC_API_URL}/getcustomerdetail/${id}/${custId}`
      );

      if (response.status === 200) {
        setcustomer(response.data[0]);
        setloading(false);
      } else {
        console.log(response);
      }
    } catch (error) {
      window.alert(error.response.data.msg);
    }
  };

  // Detele Customer
  const Deletecustomer = async () => {
    alertvisible();
    try {
      const id = route.params.id;
      const custId = route.params.obid;
      const response = await axios.delete(
        `${process.env.EXPO_PUBLIC_API_URL}/deletecustomer/${id}/${custId}`
      );

      if (response.status === 200) {
        navigation.navigate("Home", {
          id: id,
        });
      } else {
        console.log(response);
        window.alert("Something Went Wrong");
      }
    } catch (err) {
      window.alert(err.response.data.msg);
    }
  };
  const navigation = useNavigation();

  useEffect(() => {
    getdata();

    const focusHandler = navigation.addListener("focus", () => {
      getdata();
    });
    return focusHandler;
  }, [route]);

  const [Fontloaded] = useFonts({
    Medium: require("../../assets/Font/Roboto-Medium.ttf"),
    Bold: require("../../assets/Font/Roboto-Bold.ttf"),
    Regular: require("../../assets/Font/Roboto-Regular.ttf"),
  });
  if (!Fontloaded) {
    return null;
  }

  {
    if (loading == true) {
      return (
        <ActivityIndicator
          size={50}
          color="#56BC1F"
          style={{
            flex: 1,
            justifyContent: "center",
            flexDirection: "row",
            justifyContent: "space-around",
            padding: 10,
          }}
          animating={loading}
        />
      );
    } else {
      return (
        <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
          <View>
            <View style={[styles.protop, { height: responsiveHeight(45) }]}>
              <View style={[styles.flatlistheader, { marginLeft: 0 }]}>
                <View style={[styles.headername, styles.spacebetween]}>
                  <View style={styles.flexstart}>
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
                    <View style={{ width: responsiveWidth(65) }}>
                      <Text
                        style={[
                          styles.headernametext,
                          {
                            fontSize: responsiveFontSize(2.5),
                            color: "#333232",
                            fontFamily: "Regular",
                          },
                        ]}
                      >
                        Profile
                      </Text>
                    </View>
                  </View>

                  <View style={[styles.flexstart]}>
                    <TouchableOpacity
                      style={[styles.headericon]}
                      onPress={() => {
                        navigation.navigate("Costomer Detail Edit", {
                          id: req.params.id,
                          obid: req.params.obid,
                        });
                      }}
                    >
                      <Feather name="edit" size={24} color="#575555" />
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={[
                        styles.headericon,
                        { marginLeft: responsiveWidth(2) },
                      ]}
                      onPress={alertvisible}
                    >
                      <Feather
                        name="trash-2"
                        size={24}
                        style={{ marginHorizontal: responsiveWidth(0.5) }}
                        color="#575555"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              <View
                style={{
                  marginHorizontal: responsiveWidth(8),
                  marginTop: responsiveHeight(1),
                }}
              >
                <Text
                  style={[
                    styles.titletext,
                    {
                      marginBottom: responsiveHeight(1),
                      fontSize: responsiveFontSize(4),
                      color: "#333232",
                      fontFamily: "Regular",
                    },
                  ]}
                >
                  {customer.cus_name}{" "}
                </Text>

                <View style={{ marginTop: responsiveHeight(2) }}>
                  <Text
                    style={[
                      styles.desctext,
                      {
                        color: "#333232",
                        fontFamily: "Medium",
                        fontSize: responsiveFontSize(2),
                      },
                    ]}
                  >
                    Mobile Number
                  </Text>
                  {customer.cus_number === "" ? (
                    <View
                      style={[
                        styles.flexstart,
                        {
                          marginLeft: responsiveWidth(4),
                          marginTop: responsiveHeight(1),
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.desctext,
                          {
                            fontSize: responsiveFontSize(2),
                            color: "#333232",
                            fontFamily: "Regular",
                          },
                        ]}
                      >
                        No Number
                      </Text>
                    </View>
                  ) : (
                    <View
                      style={[
                        styles.flexstart,
                        {
                          marginLeft: responsiveWidth(4),
                          marginTop: responsiveHeight(1),
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.desctext,
                          {
                            fontSize: responsiveFontSize(2),
                            color: "#333232",
                            fontFamily: "Regular",
                          },
                        ]}
                      >
                        +91 {customer.cus_number}
                      </Text>
                      <TouchableOpacity
                        style={{ marginLeft: responsiveWidth(2) }}
                        onPress={() => {
                          Phone(customer.cus_number);
                        }}
                      >
                        <Feather name="phone-call" size={18} color="#4a4a48" />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{
                          marginLeft: responsiveWidth(3),
                          marginRight: responsiveWidth(3),
                        }}
                        onPress={() => {
                          Whatsapp(customer.cus_number);
                        }}
                      >
                        <FontAwesome
                          name="whatsapp"
                          size={18}
                          color="#56BC1F"
                        />
                      </TouchableOpacity>
                    </View>
                  )}
                </View>

                <View style={{ marginTop: responsiveHeight(2) }}>
                  <Text
                    style={[
                      styles.desctext,
                      {
                        color: "#333232",
                        fontFamily: "Medium",
                        fontSize: responsiveFontSize(2),
                      },
                    ]}
                  >
                    Email
                  </Text>

                  {customer.cus_email === "" ? (
                    <View
                      style={[
                        styles.flexstart,
                        {
                          marginLeft: responsiveWidth(4),
                          marginTop: responsiveHeight(1),
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.desctext,
                          {
                            fontSize: responsiveFontSize(2),
                            color: "#333232",
                            fontFamily: "Regular",
                          },
                        ]}
                      >
                        No Email
                      </Text>
                    </View>
                  ) : (
                    <View
                      style={[
                        styles.flexstart,
                        {
                          marginLeft: responsiveWidth(4),
                          marginTop: responsiveHeight(1),
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.desctext,
                          {
                            fontSize: responsiveFontSize(2),
                            color: "#333232",
                            fontFamily: "Regular",
                          },
                        ]}
                      >
                        {customer.cus_email}
                      </Text>
                    </View>
                  )}
                </View>

                <View style={{ marginTop: responsiveHeight(2) }}>
                  <Text
                    style={[
                      styles.desctext,
                      {
                        color: "#333232",
                        fontFamily: "Medium",
                        fontSize: responsiveFontSize(2),
                      },
                    ]}
                  >
                    Address
                  </Text>

                  {customer.cus_address === "" ? (
                    <View
                      style={[
                        styles.flexstart,
                        {
                          marginLeft: responsiveWidth(4),
                          marginTop: responsiveHeight(1),
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.desctext,
                          {
                            fontSize: responsiveFontSize(2),
                            color: "#333232",
                            fontFamily: "Regular",
                          },
                        ]}
                      >
                        No Address
                      </Text>
                    </View>
                  ) : (
                    <View
                      style={[
                        styles.flexstart,
                        {
                          marginLeft: responsiveWidth(4),
                          marginTop: responsiveHeight(1),
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.desctext,
                          {
                            fontSize: responsiveFontSize(2),
                            color: "#333232",
                            fontFamily: "Regular",
                          },
                        ]}
                      >
                        {customer.cus_address}
                      </Text>
                    </View>
                  )}
                </View>
              </View>
            </View>
            <View
              style={{
                marginHorizontal: responsiveWidth(10),
                marginTop: responsiveHeight(1.3),
              }}
            >
              <View
                style={{
                  borderWidth: 0.5,
                  borderColor: "#d9d9d9",
                  marginVertical: responsiveHeight(2),
                }}
              ></View>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Order");
                }}
              >
                <View
                  style={[
                    styles.spacebetween,
                    { marginVertical: responsiveHeight(2) },
                  ]}
                >
                  <View style={styles.flexstart}>
                    <Text style={styles.proicon}>
                      <MaterialCommunityIcons
                        name="clipboard-text"
                        size={20}
                        color="black"
                      />
                    </Text>
                    <Text
                      style={[
                        styles.prolistfont,
                        { color: "#333232", fontFamily: "Regular" },
                      ]}
                    >
                      {customer.cus_name} Orders
                    </Text>
                  </View>
                  <Text>
                    <AntDesign name="right" size={16} color="black" />
                  </Text>
                </View>
              </TouchableOpacity>

              <View
                style={{
                  borderWidth: 0.5,
                  borderColor: "#d9d9d9",
                  marginVertical: responsiveHeight(2),
                }}
              ></View>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Measure");
                }}
              >
                <View
                  style={[
                    styles.spacebetween,
                    { marginVertical: responsiveHeight(2) },
                  ]}
                >
                  <View style={styles.flexstart}>
                    <Text style={styles.proicon}>
                      <Fontisto name="nav-icon-grid" size={20} color="black" />
                    </Text>
                    <Text
                      style={[
                        styles.prolistfont,
                        { color: "#333232", fontFamily: "Regular" },
                      ]}
                    >
                      {customer.cus_name} Measurments
                    </Text>
                  </View>
                  <Text>
                    <AntDesign name="right" size={16} color="black" />
                  </Text>
                </View>
              </TouchableOpacity>

              <View
                style={{
                  borderWidth: 0.5,
                  borderColor: "#d9d9d9",
                  marginVertical: responsiveHeight(2),
                }}
              ></View>

              <Modal
                animationType="slide"
                transparent
                visible={isalertvisible}
                presentationStyle="overFullScreen"
                onDismiss={alertvisible}
              >
                <View style={styles.viewWrapper}>
                  <View style={styles.modalView}>
                    <View style={styles.modelicon}>
                      <MaterialCommunityIcons
                        name="delete-circle"
                        size={65}
                        color="#ff4444"
                      />
                    </View>

                    <Text style={[styles.modelAlertlabel]}>Are you sure ?</Text>

                    <Text style={[styles.modelalertdec, { marginTop: 10 }]}>
                      Delete {customer.cus_name} ?
                    </Text>

                    <View
                      style={{
                        flex: 1,
                        flexDirection: "row",
                        marginHorizontal: "10%",
                        marginTop: responsiveHeight(4),
                        marginBottom: responsiveHeight(2.5),
                      }}
                    >
                      <View
                        style={[
                          styles.modelAlertbtn,
                          {
                            backgroundColor: "#fff",
                            borderColor: "#ff4444",
                            borderWidth: 1,
                            marginRight: responsiveWidth(3.4),
                            paddingVertical: responsiveHeight(1),
                          },
                        ]}
                      >
                        <TouchableOpacity
                          onPress={alertvisible}
                          style={{
                            flex: 1,
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Text
                            style={{
                              fontSize: responsiveFontSize(2),
                              color: "#000",
                              fontWeight: "bold",
                            }}
                          >
                            Cancel
                          </Text>
                        </TouchableOpacity>
                      </View>

                      <View
                        style={[
                          styles.modelAlertbtn,
                          {
                            backgroundColor: "#ff4444",
                            marginLeft: responsiveWidth(3.4),
                            paddingVertical: 10,
                          },
                        ]}
                      >
                        <TouchableOpacity
                          onPress={Deletecustomer}
                          style={{
                            flex: 1,
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Text
                            style={{
                              fontSize: responsiveFontSize(2),
                              color: "#ffffff",
                              fontWeight: "bold",
                            }}
                          >
                            Delete
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              </Modal>
            </View>
          </View>
        </SafeAreaView>
      );
    }
  }
};

export default CustomerDetail;
