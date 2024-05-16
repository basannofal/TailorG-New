import {
  ActivityIndicator,
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../../styles/style";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const UrgentDetail = ({ route }) => {
  const navigation = useNavigation();

  const [loading, setloading] = useState(false);

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
          <View style={[styles.flatlistheader]}>
            <View style={styles.headername}>
              <View>
                <Text style={styles.headernametext}>Urgent Order</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity onPress={()=>navigation.navigate("OrderPath")}>
            <View
              style={[
                styles.urgentcontainer,
                styles.spacebetween,
                {
                  borderRadius: responsiveWidth(2.6),
                  height: responsiveHeight(13),
                },
              ]}
            >
              <View
                style={[
                  styles.flexstart,
                  {
                    borderRadius: responsiveWidth(2.1),
                    alignItems: "flex-start",
                    paddingVertical: 2,
                  },
                ]}
              >
                <View>
                  <Image
                    style={[
                      styles.avtar,
                      {
                        borderRadius: 10,
                        height: responsiveHeight(13),
                        width: responsiveWidth(22),
                      },
                    ]}
                    // source={require("../../assets/jens.jpg")}
                    source={{ uri: 'https://www.tistabene.com/cdn/shop/products/MJS-0018A.jpg?v=1694077964' }}
                  />
                </View>

                <View
                  style={[styles.flatlisttext, { marginTop: 3, width: "65%" }]}
                >
                  <Text style={[styles.titletext, { marginBottom: 2 }]}>
                    jeans
                  </Text>
                  <Text style={{ fontSize: 12 }}>
                    Lorem ipsum dolor sit amet sfssdf sit amet consectetur{" "}
                  </Text>

                  <View
                    style={[
                      styles.spacebetween,
                      { alignItems: "flex-start", marginTop: 5 },
                    ]}
                  >
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "bold",
                        marginTop: 3,
                      }}
                    >
                      18 march 2023
                    </Text>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                      Rs. 1200
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={[
                styles.urgentcontainer,
                styles.spacebetween,
                {
                  borderRadius: responsiveWidth(2.6),
                  height: responsiveHeight(13),
                },
              ]}
            >
              <View
                style={[
                  styles.flexstart,
                  {
                    borderRadius: responsiveWidth(2.1),
                    alignItems: "flex-start",
                    paddingVertical: 2,
                  },
                ]}
              >
                <View>
                  <Image
                    style={[
                      styles.avtar,
                      {
                        borderRadius: 10,
                        height: responsiveHeight(13),
                        width: responsiveWidth(22),
                      },
                    ]}
                    // source={require("../../assets/jens.jpg")}
                    source={{ uri: 'https://www.tistabene.com/cdn/shop/products/MJS-0018A.jpg?v=1694077964' }}
                  />
                </View>

                <View
                  style={[styles.flatlisttext, { marginTop: 3, width: "65%" }]}
                >
                  <Text style={[styles.titletext, { marginBottom: 2 }]}>
                    jeans
                  </Text>
                  <Text style={{ fontSize: 12 }}>
                    Lorem ipsum dolor sit amet sfssdf sit amet consectetur{" "}
                  </Text>

                  <View
                    style={[
                      styles.spacebetween,
                      { alignItems: "flex-start", marginTop: 5 },
                    ]}
                  >
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: "bold",
                        marginTop: 3,
                      }}
                    >
                      18 march 2023
                    </Text>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                      Rs. 1200
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </SafeAreaView>
      );
    }
  }
};

export default UrgentDetail;
