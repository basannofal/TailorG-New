import { ActivityIndicator, SafeAreaView, Image, Text, TouchableOpacity, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import SelectDropdown from 'react-native-select-dropdown'
import { styles } from '../../styles/style';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const ActiveOrder = () => {
    const [Ordertype, setOrdertype] = useState('Active');
    const navigation = useNavigation();
    // Static data for the dropdown and list items
    const countries = ["Active", "Completed"];
    return (
        <>
            <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
                <View style={[styles.flatlistheader]}>
                    <View style={[styles.headername,]}>
                        <View>
                            <Text style={styles.headernametext}>Orders</Text>
                        </View>


                        <TouchableOpacity style={[styles.headericon, { marginLeft: responsiveWidth(10) }]}
                            onPress={() => {
                                navigation.navigate("Addorder")
                            }}
                        >
                            <AntDesign name="plus" size={14} style={{ marginHorizontal: responsiveWidth(.5), }} color="black" />
                            <Text style={[styles.link,]}>Add Order</Text>
                        </TouchableOpacity>


                        <View style={{ width: responsiveWidth(78), height: responsiveHeight(5), flexDirection: "row", alignItems: "center" }}>
                            <SelectDropdown
                                data={countries}
                                onSelect={(selectedItem, index) => {
                                    setOrdertype(selectedItem);
                                }}
                                buttonTextAfterSelection={(selectedItem, index) => {
                                    return selectedItem;
                                }}
                                rowTextForSelection={(item, index) => {
                                    return item;
                                }}
                                defaultValue={"Active"}
                                buttonStyle={{ backgroundColor: "#fff", width: "41%", right: 0 }}
                                buttonTextStyle={{ fontSize: 14, color: "#56BC1F", fontWeight: "bold", textAlign: "center" }}
                                selectedRowTextStyle={{ fontSize: 14, fontWeight: "bold", color: "#56BC1F", opacity: 1 }}
                                dropdownStyle={{ marginTop: -10, borderRadius: 5 }}
                                rowTextStyle={{ fontSize: 14 }}
                                renderDropdownIcon={() => {
                                    return (<AntDesign name="down" size={14} color="black" />);
                                }}
                            />
                        </View>
                    </View>


                </View>

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("OrderPath")
                    }}
                >
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
        </>
    )
}

export default ActiveOrder
