import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  TextInput,
  ActivityIndicator,
  SafeAreaView,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { RadioButton } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { styles } from "../../styles/style";
import axios from "axios";
import { AuthContext } from "../../middleware/AuthReducer";

const ShopProfile = ({ route }) => {
  const { loginState, authContext } = React.useContext(AuthContext);

  const handleSignout = async () => {
    await authContext.signout();
  };

  const ProfileEdit = () => {
    navigation.navigate("Profile Edit", {
      id: id,
    });
  };

  const id = route.params.id;

  const navigation = useNavigation();

  const [data, setdata] = useState("");
  const [loading, setloading] = useState(true);

  const getdata = async () => {
    try {
      const response = await axios.get(
        `${process.env.EXPO_PUBLIC_API_URL}/getshopdetail/${id}`
      );
      if (response.status === 200) {
        setdata(response.data[0]);
        setloading(false);
        console.log(response.data[0]);
      } else {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
      window.alert(error.response.data.msg);
    }
  };

  useEffect(() => {
    const focusHandler = navigation.addListener("focus", () => {
      getdata();
    });
    return focusHandler;
  }, [route]);

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
        <ScrollView showsVerticalScrollIndicator={false}>
          <SafeAreaView
            style={{
              backgroundColor: "#fff",
              flex: 1,
              height: responsiveHeight(100),
            }}
          >
            <View>
              <View
                style={[
                  styles.protop,
                  {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                ]}
              >
                <View style={{ flexDirection: "column", alignItems: "center" }}>
                  <Image
                    style={[styles.profilepic]}
                    // source={require('../../assets/images/shop/a1.png')}
                    source={{ uri: 'https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg' }}
                  />
                  <Text
                    style={[
                      styles.titletext,
                      {
                        marginTop: responsiveHeight(1),
                        marginBottom: responsiveHeight(1),
                      },
                    ]}
                  >
                    {data.fname}
                  </Text>
                  <Text style={styles.desctext}>+91 {data.mobile_number}</Text>
                </View>
              </View>
              <View
                style={{
                  marginHorizontal: responsiveWidth(10),
                  marginTop: responsiveHeight(1.3),
                }}
              >
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
                      <Text style={styles.prolistfont}>Orders</Text>
                    </View>
                    <Text>
                      <AntDesign name="right" size={16} color="black" />
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Cloth Type", { id: id });
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
                        <Ionicons
                          name="ellipsis-horizontal-circle"
                          size={20}
                          color="black"
                        />
                      </Text>
                      <Text style={styles.prolistfont}>Dress Type</Text>
                    </View>
                    <Text>
                      <AntDesign name="right" size={16} color="black" />
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Cloth Type Part", { id: id });
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
                        <Fontisto
                          name="nav-icon-grid"
                          size={20}
                          color="black"
                        />
                      </Text>
                      <Text style={styles.prolistfont}>Measurments Type</Text>
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
                    navigation.navigate("Profile Info", {
                      id: id,
                    });
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
                          name="account"
                          size={20}
                          color="black"
                        />
                      </Text>
                      <Text style={styles.prolistfont}>Profile</Text>
                    </View>
                    <Text>
                      <AntDesign name="right" size={16} color="black" />
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleSignout}>
                  <View
                    style={[
                      styles.spacebetween,
                      { marginVertical: responsiveHeight(2) },
                    ]}
                  >
                    <View style={styles.flexstart}>
                      <Text style={styles.proicon}>
                        <Entypo name="log-out" size={18} color="black" />
                      </Text>
                      <Text style={styles.prolistfont}>Logout</Text>
                    </View>
                    <Text>
                      <AntDesign name="right" size={16} color="black" />
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
        </ScrollView>
      );
    }
  }
};

export default ShopProfile;
