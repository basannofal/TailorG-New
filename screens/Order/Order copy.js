import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { styles } from "../../styles/style";
import { MaterialIcons } from "@expo/vector-icons";

const Order = ({ route }) => {
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
                <View>
                  <Text style={styles.headernametext}>
                    250
                  </Text>
                  <Text style={{ fontSize: responsiveFontSize(2) }}>
                   paint
                  </Text>
                </View>
              </View>

              <View>
                <Text
                  style={{
                    fontSize: responsiveFontSize(2),
                    alignSelf: "flex-start",
                    marginTop: responsiveHeight(1.3),
                    marginRight: responsiveWidth(2.5),
                  }}
                >
                  12 Mar 2024
                </Text>
              </View>
            </View>
          </View>

          <View
            style={[
              styles.inputfield,
              {
                marginHorizontal: responsiveWidth(8),
                marginTop: responsiveHeight(2),
              },
            ]}
          >
            <Text style={[styles.label, { marginLeft: responsiveWidth(1.3) }]}>
              Special Note
            </Text>

            <TextInput
              editable={false}
              style={[styles.input, { borderRadius: responsiveWidth(2) }]}
              numberOfLines={3}
              textAlignVertical="top"
              placeholderTextColor="#000"
              multiline={true}
              placeholder="special notes"
            />
          </View>

          <FlatList
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                      alignItems: "center",
                      marginHorizontal: responsiveWidth(5),
                      marginVertical: responsiveHeight(3),
                    }}
                  >
                    <Text
                      style={[
                        styles.modellabel,
                        {
                          color: "#000",
                          opacity: 1,
                          width: responsiveWidth(30),
                        },
                      ]}
                    >
                      item.name
                    </Text>

                    <TextInput
                      style={[
                        styles.input,
                        { width: responsiveWidth(30), textAlign: "center" },
                      ]}
                      keyboardType="numeric"
                      editable={false}
                      placeholderTextColor="#000"
                      placeholder={item.value}
                    ></TextInput>
                  </View>
                </>
              );
            }}
          />

          {/*   
              <TouchableOpacity style={[styles.onlybtn, { backgroundColor: "#B63F3F", marginTop: responsiveHeight(1), }]} onPress={deletevisible}  >
                <Text style={styles.onlybtntext}>Delete</Text>
              </TouchableOpacity>
    
              <Modal animationType="slide"
                transparent visible={isdelete}
                presentationStyle="overFullScreen"
                onDismiss={deletevisible}>
                <View style={styles.viewWrapper}>
                  <View style={styles.modalView}>
                    <View style={styles.modelicon}>
                      <MaterialCommunityIcons name="delete-circle" size={65} color="#ff4444" />
                    </View>
    
    
                    <Text style={[styles.modelAlertlabel]}>Are you sure ?</Text>
    
    
                    <Text style={[styles.modelalertdec, { marginTop: 10 }]}>Delete {customer.clmesurement} ?</Text>
    
    
                    <View style={{ flex: 1, flexDirection: "row", marginHorizontal: "10%", marginTop: responsiveHeight(4), marginBottom: responsiveHeight(2.5) }}>
                      <View style={[styles.modelAlertbtn, { backgroundColor: "#fff", borderColor: "#ff4444", borderWidth: 1, marginRight: responsiveWidth(3.4), paddingVertical: responsiveHeight(1) }]}>
                        <TouchableOpacity onPress={deletevisible} style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                          <Text style={{ fontSize: responsiveFontSize(2.3), color: "#000", fontWeight: "bold", }}>Cancel</Text>
                        </TouchableOpacity>
                      </View>
    
                      <View style={[styles.modelAlertbtn, { backgroundColor: "#ff4444", marginLeft: responsiveWidth(3.4), paddingVertical: 10 }]}>
                        <TouchableOpacity onPress={deletemeasure} style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                          <Text style={{ fontSize: responsiveFontSize(2.3), color: "#ffffff", fontWeight: "bold", }} >Delete</Text>
                        </TouchableOpacity>
                      </View>
    
    
                    </View>
    
                  </View>
                </View>
              </Modal> */}
        </SafeAreaView>
      );
    }
  }
};

export default Order;
