import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { styles } from "../../styles/style";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const OrderView = ({ route }) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [isdelete, setisdelete] = useState(false);

  const deletevisible = () => {
    setisdelete(!isdelete);
  };

  const [isalertvisible, setisalertvisible] = useState(false);

  const alertvisible = () => {
    setisalertvisible(!isalertvisible);
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
        <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Modal
              animationType="slide"
              transparent
              visible={isdelete}
              presentationStyle="overFullScreen"
              onDismiss={deletevisible}
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
                    Delete
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
                        onPress={deletevisible}
                        style={{
                          flex: 1,
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: responsiveFontSize(2.3),
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
                        style={{
                          flex: 1,
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: responsiveFontSize(2.3),
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
                    <AntDesign
                      name="questioncircle"
                      size={55}
                      color="#f0aa02"
                    />
                  </View>

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
                          backgroundColor: "#ff4444",
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
                            fontSize: responsiveFontSize(2.3),
                            color: "#ffffff",
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
                          marginLeft: responsiveWidth(3.4),
                          paddingVertical: 10,
                        },
                      ]}
                    >
                      <TouchableOpacity
                        style={{
                          flex: 1,
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Text
                          style={{
                            fontSize: responsiveFontSize(2.3),
                            color: "#ffffff",
                            fontWeight: "bold",
                          }}
                        >
                          Save
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </Modal>

            <View style={{ display: "flex" }}>
              <Image
                style={[styles.orderphoto]}
                // source={require("../../assets/order.png")}
                source={{ uri: 'https://www.tistabene.com/cdn/shop/products/MJS-0018A.jpg?v=1694077964' }}
              />
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Edit Order", {
                    id: mainid,
                    obid: objectid,
                    orid: orid,
                  });
                }}
                style={{
                  bottom: responsiveHeight(44),
                  left: responsiveWidth(88),
                  paddingTop: responsiveWidth(2),
                  paddingBottom: responsiveWidth(3.5),
                  paddingHorizontal: responsiveWidth(4),
                  backgroundColor: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  borderBottomLeftRadius: responsiveWidth(10),
                  position: "absolute",
                }}
              >
                {/* <FontAwesome name="edit" size={24} color="#575555" /> */}
                <Ionicons name="create-outline" size={24} color="#575555" />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                  bottom: responsiveHeight(45),
                  left: responsiveWidth(2),
                  padding: responsiveWidth(1),
                  backgroundColor: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  borderRadius: responsiveWidth(10),
                  position: "absolute",
                }}
              >
                <MaterialIcons
                  name="arrow-back"
                  size={23}
                  color="black"
                  style={{ alignSelf: "center" }}
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                paddingHorizontal: responsiveWidth(6),
                marginTop: responsiveHeight(2),
              }}
            >
              <View style={styles.spacebetween}>
                <View style={styles.flexstart}>
                  <Entypo name="shopping-cart" size={16} color="#56BC1F" />
                  <Text
                    style={[
                      styles.link,
                      { marginHorizontal: responsiveWidth(1) },
                    ]}
                  >
                    Order
                  </Text>
                </View>
                <TouchableOpacity style={[styles.flexstart]}>
                  <MaterialCommunityIcons
                    name="eye"
                    size={20}
                    style={{ marginHorizontal: responsiveWidth(1) }}
                    color="#56BC1F"
                  />
                  <Text style={styles.link}>View Measurment</Text>
                </TouchableOpacity>
              </View>

              <View style={{ paddingVertical: responsiveHeight(1) }}>
                <Text style={[styles.headingtext, { color: "#000" }]}>
                  Jeans & Shirt
                </Text>
                <Text style={{ marginTop: responsiveHeight(1),opacity:0.5 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </Text>
              </View>

              <View>
                <Text
                  style={[
                    styles.titletext,
                    { fontSize: responsiveFontSize(2.3), fontWeight: '500', marginTop: responsiveHeight(1) },
                  ]}
                >
                  Customer Detail
                </Text>

                <View
                  style={{
                    marginHorizontal: responsiveWidth(2),
                    paddingVertical: responsiveHeight(2),
                  }}
                >
                  <View style={[styles.flexstart]}>
                    <Ionicons name="person" size={14} color="black" />
                    <Text style={{ marginHorizontal: responsiveWidth(2) }}>
                      ahmad
                    </Text>
                  </View>

                  <View
                    style={[
                      styles.flexstart,
                      { marginTop: responsiveHeight(0.6) },
                    ]}
                  >
                    <FontAwesome5 name="phone-alt" size={14} color="black" />
                    <Text style={{ marginHorizontal: responsiveWidth(2) }}>
                      12312 31231
                    </Text>
                  </View>

                  <View
                    style={[
                      styles.flexstart,
                      { marginTop: responsiveHeight(0.6) },
                    ]}
                  >
                    <MaterialIcons name="location-on" size={14} color="black" />
                    <Text style={{ marginHorizontal: responsiveWidth(2) }}>
                      majadar
                    </Text>
                  </View>
                </View>
              </View>

              <View
                style={[
                  styles.line90,
                  { marginVertical: responsiveHeight(0.8) },
                ]}
              ></View>

              <View
                style={[
                  styles.flexstart,
                  { marginHorizontal: responsiveWidth(2) },
                ]}
              >
                <FontAwesome
                  name="rupee"
                  size={17}
                  color="black"
                  style={{ top: responsiveHeight(0.3) ,left:responsiveHeight(0.5)}}
                />
                <Text
                  style={[
                    styles.titletext,
                    { marginHorizontal: responsiveWidth(2), fontWeight: '500' },
                  ]}
                >
                  1200
                </Text>
              </View>
            </View>
          </ScrollView>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              marginHorizontal: responsiveWidth(5),
            }}
          >
            <TouchableOpacity
              style={[
                styles.onlybtn,
                { width: responsiveWidth(40), backgroundColor: "#B63F3F" },
              ]}
              onPress={deletevisible}
            >
              <View style={styles.flexstart}>
                <AntDesign
                  name="close"
                  size={18}
                  style={{ fontWeight: "bold", top: responsiveHeight(0.1) }}
                  color="#fff"
                />
                <Text
                  style={[
                    styles.onlybtntext,
                    { marginHorizontal: responsiveWidth(1) },
                  ]}
                >
                  Delete
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={alertvisible}
                style={[
                  styles.onlybtn,
                  { backgroundColor: "#fbff12", width: responsiveWidth(40) },
                ]}
              >
                <View style={styles.flexstart}>
                  <Feather
                    name="check"
                    size={18}
                    style={{ fontWeight: "bold", top: responsiveHeight(0.3) }}
                    color="#000"
                  />
                  <Text
                    style={[
                      styles.onlybtntext,
                      { marginHorizontal: responsiveWidth(1), color: "#000" },
                    ]}
                  >
                    Completed
                  </Text>
                </View>
              </TouchableOpacity>

            {/* <TouchableOpacity
              onPress={alertvisible}
              style={[styles.onlybtn, { width: responsiveWidth(40) }]}
            >
              <View style={styles.flexstart}>
                <Ionicons
                  name="checkmark-done-circle"
                  size={22}
                  style={{ fontWeight: "bold", top: responsiveHeight(0.3) }}
                  color="#fff"
                />
                <Text
                  style={[
                    styles.onlybtntext,
                    { marginHorizontal: responsiveWidth(1) },
                  ]}
                >
                  Delivered
                </Text>
              </View>
            </TouchableOpacity> */}
          </View>
        </SafeAreaView>
      );
    }
  }
};

export default OrderView;
