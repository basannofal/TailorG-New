import {
  ActivityIndicator,
  SafeAreaView,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Linking,
  Keyboard,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "../../styles/style";
import { Feather } from "@expo/vector-icons";
import { useFonts } from "expo-font/build/FontHooks";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import axios from 'axios'

const ShopHome = React.memo(({ route }) => {
  const id = route.params.id;

  const Whatsapp = (e) => {
    Linking.openURL(`whatsapp://send?text=Hello&phone=+91${e}`);
  };

  const Phone = (e) => {
    Linking.openURL(`tel:${e}`);
  };

  // Navigation
  const navigation = useNavigation();

  //States
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);
  const [filterdata, setfilterdata] = useState([]);
  const [search, setsearch] = useState("");

  const getdata = async () => {
    try {
      const response = await axios.get(
        `${process.env.EXPO_PUBLIC_API_URL}/getcustomers/${id}`
      );

      if (response.status === 200) {
        setdata(response.data);
        setfilterdata(response.data);
        setloading(false);
      } else {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
      window.alert(error.response.data.msg);
    }
  };



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

  const searchdata = (text) => {
    if (text) {
      const newdata = data.filter((item) => {
        const itemdata = item.cus_name
          ? item.cus_name.toUpperCase()
          : "".toUpperCase();
        const textdata = text.toUpperCase();
        return itemdata.indexOf(textdata) > -1;
      });

      setfilterdata(newdata);
      setsearch(text);
    } else {
      setfilterdata(data);
      setsearch(text);
    }
  };

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
        <>
          <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
            <View style={[styles.flatlistheader]}>
              <View style={styles.headername}>
                <View>
                  <Text
                    style={[styles.headernametext, { fontFamily: "Medium" }]}
                  >
                    Customers{" "}
                  </Text>
                </View>

                <TouchableOpacity
                  style={styles.headericon}
                  onPress={() => {
                    navigation.navigate("AddCustomer", {
                      id: id,
                    });
                  }}
                >
                  <AntDesign name="plus" size={20} color="black" />
                  <Text
                    style={[
                      styles.link,
                      {
                        paddingHorizontal: responsiveWidth(1),
                        fontFamily: "Regular",
                      },
                    ]}
                  >
                    Add
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={[styles.flexstart, { marginTop: responsiveHeight(2.5) }]}
              >
                <TextInput
                  style={[
                    styles.input,
                    {
                      marginLeft: responsiveWidth(2),
                      width: responsiveWidth(65),
                      borderBottomLeftRadius: 5,
                      borderTopLeftRadius: 5,
                      fontFamily: "Regular",
                    },
                  ]}
                  onChangeText={(e) => searchdata(e)}
                  value={search}
                  placeholder="Search Customer"
                  underlineColorAndroid="transparent"
                />

                <TouchableOpacity
                  onPress={Keyboard.dismiss}
                  style={{
                    width: responsiveWidth(15),
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#56BC1F",
                    borderTopRightRadius: 5,
                    borderBottomRightRadius: 5,
                    paddingVertical: responsiveHeight(1.7),
                  }}
                >
                  <AntDesign name="search1" size={24} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>

            {filterdata != "" ? (
              <FlatList
                data={filterdata}
                keyExtractor={(item) => item.id}
                // inverted
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                  <View style={[styles.flatlistcontainer, styles.spacebetween]}>
                    <TouchableOpacity
                      style={styles.flexstart}
                      onPress={() => {
                        navigation.navigate("Customer View", {
                          id: id,
                          obid: item.id,
                        }),
                          setsearch("");
                      }}
                    >
                      <Image
                        style={[
                          styles.avtar,
                          { marginLeft: responsiveWidth(1) },
                        ]}
                        source={require("../../assets/images/shop/customericon.png")}
                      />

                      <View
                        style={{
                          width: responsiveWidth(40),
                          marginHorizontal: responsiveWidth(3),
                          paddingLeft:responsiveWidth(1)
                        }}
                      >
                        <Text
                          style={[
                            styles.titletext,
                            { fontFamily: "Regular", letterSpacing: 0.5,  },
                          ]}
                        >
                          
                          {item.cus_name}
                        </Text>
                        <View style={[styles.flexstart, { marginTop: 2 }]}>
                          <Text
                            style={{
                              fontFamily: "Regular",
                              opacity: 0.7,
                              letterSpacing: 0.5,
                              fontSize: responsiveFontSize(1.5),
                              marginLeft: responsiveWidth(0.7),
                            }}
                          >
                            {item.cus_address}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>

                    <View style={[styles.flatlistbtn, styles.flexstart]}>
                      <TouchableOpacity
                        onPress={() => {
                          Phone(item.cus_number);
                        }}
                      >
                        <Feather name="phone-call" size={22} color="#4a4a48" />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{
                          marginLeft: responsiveWidth(5),
                          marginRight: responsiveWidth(3),
                        }}
                        onPress={() => {
                          Whatsapp(item.cus_number);
                        }}
                      >
                        <FontAwesome
                          name="whatsapp"
                          size={24}
                          color="#56BC1F"
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
              />
            ) : (
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  height: responsiveHeight(55),
                }}
              >
                <Text
                  style={{
                    fontSize: responsiveFontSize(4),
                    opacity: 0.4,
                    fontFamily: "Regular",
                  }}
                >
                  No Customer Found
                </Text>
                <TouchableOpacity
                  style={{ width: responsiveWidth(74) }}
                  onPress={() => {
                    navigation.navigate("AddCustomer", {
                      id: id,
                    });
                  }}
                >
                  <Text
                    style={[
                      {
                        textAlign: "center",
                        marginTop: responsiveHeight(3),
                        fontSize: responsiveFontSize(2),
                        borderRadius: 10,
                        padding: responsiveHeight(1),
                        color: "#fff",
                        fontFamily: "Regular",
                        backgroundColor: "#56BC1F",
                      },
                    ]}
                  >
                    Add Customer{" "}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </SafeAreaView>
        </>
      );
    }
  }
});

export default ShopHome;
