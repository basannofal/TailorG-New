import { ActivityIndicator, SafeAreaView, Image, Text, TouchableOpacity, View, Modal, Platform, FlatList, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react';
import { RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import SelectDropdown from 'react-native-select-dropdown'
import { styles } from '../../styles/style';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { MaterialIcons } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { FontAwesome5 } from '@expo/vector-icons';


const AddOrder = () => {
    const navigation = useNavigation();
    const [urgent, seturgent] = useState('Old');
    const [checked, setChecked] = useState('No');
    const [gender, setgender] = useState('male');
    const [specialNote, setspecialNote] = useState("");
    const [prize, setprize] = useState("");
    const [isPickerShow, setIsPickerShow] = useState(false);
    const [date, setDate] = useState(new Date(Date.now()));
    const [Ordertype, setOrdertype] = useState('');
    const [Measurment, setMeasurment] = useState('');
    const [customerid, setcustomerid] = useState('');
    const [id, setid] = useState('');
    const [clmeasurment, setclmeasurment] = useState('');
    const [data, setdata] = useState('');
    const countries = ["Pents", "Shirt", "Kurta", "Kurti", "Kurta", "Kurti",]
    const cltype = ["Pents 1", "pents 2", "pent 3", "pent 4",]
    const [dvalue, setdvalue] = useState('');

    const [ddate, setddate] = useState('');
    const [dmonth, setdmonth] = useState('');
    const [dyear, setdyear] = useState('');
    const [sct, setsct] = useState([]);


    const [imgurl, setImgurl] = useState('');

    const [selectedimg, setSelectedimg] = useState('');
    const [changeopen, setchangeOpen] = useState(false);
    const imgdata =
        [
            { label: 'shirt logo', value: 'shirt.png', icon: () => <Image source={{ uri: 'https://www.tistabene.com/cdn/shop/products/MJS-0018A.jpg?v=1694077964' }} style={{ width: 30, height: 30 }} /> },
            { label: 'shirt logo', value: 'pent.png', icon: () => <Image source={{ uri: 'https://www.tistabene.com/cdn/shop/products/MJS-0018A.jpg?v=1694077964' }} style={{ width: 30, height: 30 }} /> },
            { label: 'shirt logo', value: 'kurta.png', icon: () => <Image source={{ uri: 'https://www.tistabene.com/cdn/shop/products/MJS-0018A.jpg?v=1694077964' }} style={{ width: 30, height: 30 }} /> },
            { label: 'shirt image', value: 'shirt1.png', icon: () => <Image source={{ uri: 'https://www.tistabene.com/cdn/shop/products/MJS-0018A.jpg?v=1694077964' }} style={{ width: 30, height: 30 }} /> },
            { label: 'pent image', value: 'pent1.png', icon: () => <Image source={{ uri: 'https://www.tistabene.com/cdn/shop/products/MJS-0018A.jpg?v=1694077964' }} style={{ width: 30, height: 30 }} /> },
            { label: 'kurta image', value: 'kurta1.jpg', icon: () => <Image source={{ uri: 'https://www.tistabene.com/cdn/shop/products/MJS-0018A.jpg?v=1694077964' }} style={{ width: 30, height: 30 }} /> },
        ]

    // This is to manage Modal State
    const [isModalVisible, setModalVisible] = useState(false);

    // This is to manage TextInput State
    const [clothname, setclothname] = useState("");

    // Create toggleModalVisibility function that will
    // Open and close modal upon button clicks.
    const toggleModalVisibility = () => {
        setModalVisible(!isModalVisible);
    };
    const showPicker = () => {
        setIsPickerShow(true);
    };

    const onChange = (event, value) => {
        setDate(value);
        setddate(value.getDate())
        setdmonth(value.getMonth() + 1)
        setdyear(value.getFullYear())

        if (Platform.OS === 'android') {
            setIsPickerShow(false);
        }
    };


    console.log(isPickerShow)
    return (
        <ScrollView style={{ backgroundColor: "#fff", }} showsVerticalScrollIndicator={false}>

            <View style={[styles.headerwithline, { flexDirection: "row" }]} >
                <View style={{ width: responsiveWidth(12) }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <MaterialIcons name="arrow-back" size={23} color="black" style={{ alignSelf: "center", marginHorizontal: responsiveWidth(1) }} />
                    </TouchableOpacity>
                </View>
                <View style={{ width: responsiveWidth(80), }}>
                    <Text style={{ alignSelf: "center", fontSize: responsiveFontSize(2.5), fontWeight: "bold" }}>Add New Order</Text>
                </View>
            </View>
            <View style={styles.line70}></View>


            <View style={[styles.form, { marginTop: responsiveHeight(4) }]}>
                <View style={{ width: "90%" }}>
                    <SelectDropdown
                        data={sct}
                        onSelect={(selectedItem, index) => {
                            setOrdertype(selectedItem.clname)
                            setdvalue(selectedItem.dvalue)
                            setprize(selectedItem.dvalue)
                            setImgurl(selectedItem.imgurl)

                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem.clname
                        }}
                        rowTextForSelection={(item, index) => {
                            return item.clname
                        }} defaultButtonText={"Select Cloth Type"}

                        buttonStyle={{ width: responsiveWidth(85), borderRadius: 5, backgroundColor: "#f5f5f5", }}
                        buttonTextStyle={{ fontSize: 18, color: "#b3b3b3", fontWeight: "bold", textAlign: "center", }}
                        selectedRowTextStyle={{ fontSize: 20, fontWeight: "bold", color: "#ffffff", opacity: 1 }}
                        dropdownStyle={{ borderRadius: 5, }}
                        selectedRowStyle={{ backgroundColor: "#56BC1F" }}
                        rowTextStyle={{ fontWeight: "bold", fontSize: 18, opacity: .6 }}
                        renderDropdownIcon={() => { return (<AntDesign name="down" size={14} color="black" />) }}
                    />
                </View>
                <TouchableOpacity onPress={toggleModalVisibility} >
                    <Text style={{ fontSize: 14, color: "#56BC1F", fontWeight: "bold", marginVertical: 10 }}>Add New Cloth ?</Text>
                </TouchableOpacity>
                <Modal animationType="slide"
                    transparent visible={isModalVisible}
                    presentationStyle="overFullScreen"
                    onDismiss={toggleModalVisibility}>
                    <View style={styles.viewWrapper}>
                        <View style={styles.modalView}>
                            <Text style={styles.modellabel}>Enter Cloth Name</Text>
                            <TextInput placeholder="Enter Cloth Name"
                                value={clothname}
                                style={styles.modalinput}
                                onChangeText={(value) => setclothname(value)}
                            />

                            <Text style={styles.modellabel}>Default Price</Text>
                            <TextInput placeholder="Default Price"
                                style={styles.modalinput} keyboardType='numeric'
                                value={dvalue} onChangeText={e => setdvalue(e)}
                            />
                            <Text style={[styles.modellabel, { marginTop: 10 }]}>Gender </Text>
                            <View style={{ display: "flex", flexDirection: "row", marginLeft: "10%", marginTop: 4 }}>
                                <Text style={{ textAlign: "center", marginTop: 4, opacity: .5, fontSize: 18, }}>male</Text>
                                <RadioButton
                                    value="male"
                                    status={gender === 'male' ? 'checked' : 'unchecked'}
                                    onPress={() => setgender('male')}
                                />
                                <Text style={{ textAlign: "center", marginTop: 4, opacity: .5, fontSize: 18, marginLeft: 20 }}>female</Text>
                                <RadioButton
                                    value="female"
                                    status={gender === 'female' ? 'checked' : 'unchecked'}
                                    onPress={() => setgender('female')}
                                />
                            </View>

                            <Text style={[styles.modellabel, { marginTop: responsiveHeight(1) }]}>Select Measurment Image</Text>
                            <View style={{ marginHorizontal: "10%", marginTop: responsiveHeight(1) }}>
                                <DropDownPicker
                                    items={imgdata}
                                    defaultValue={selectedimg}
                                    placeholder="Measurment Image"
                                    containerStyle={{ height: responsiveHeight(7) }}
                                    open={changeopen}
                                    setOpen={() => { setchangeOpen(!changeopen) }}
                                    style={{ backgroundColor: '#fff' }}
                                    itemStyle={{ justifyContent: 'flex-start' }}
                                    dropDownStyle={{ backgroundColor: '#fafafa' }}
                                    value={selectedimg}
                                    setValue={(e) => { setSelectedimg(e()); console.log(selectedimg) }}
                                />
                            </View>


                            <View style={{ flex: 1, flexDirection: "row", marginHorizontal: "10%", marginTop: responsiveHeight(4), marginBottom: responsiveHeight(2.5) }}>
                                <View style={[styles.modelAlertbtn, { backgroundColor: "#ff4444", marginRight: responsiveWidth(3.4), paddingVertical: responsiveHeight(1) }]}>
                                    <TouchableOpacity onPress={toggleModalVisibility} style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                        <Text style={{ fontSize: responsiveFontSize(2.3), color: "#ffffff", fontWeight: "bold", }}>Cancel</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={[styles.modelAlertbtn, { marginLeft: responsiveWidth(3.4), paddingVertical: 10 }]}>
                                    <TouchableOpacity
                                        // onPress={Savecloth}
                                        style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                        <Text style={{ fontSize: responsiveFontSize(2.3), color: "#ffffff", fontWeight: "bold", }} >Save</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>

                <View style={[styles.inputfield, { marginTop: responsiveHeight(2) }]}>
                    <Text style={[styles.label, { top: responsiveHeight(.8) }]}>
                        Select Measurment
                    </Text>

                    <View style={{ display: "flex", flexDirection: "row", }}>
                        <RadioButton
                            value="Old"
                            status={urgent === 'Old' ? 'checked' : 'unchecked'}
                            onPress={() => seturgent('Old')}
                            color="#56BC1F"
                            uncheckedColor='#56BC1F'

                        />
                        <Text style={{ textAlign: "center", marginTop: 6, opacity: .8, fontSize: responsiveFontSize(2), }}>Old</Text>
                        <View style={{ marginLeft: 10 }}>
                            <RadioButton
                                value="New"
                                status={urgent === 'New' ? 'checked' : 'unchecked'}
                                onPress={() => seturgent('New')}
                                color="#56BC1F"
                                uncheckedColor='#56BC1F'

                            />
                        </View>
                        <Text style={{ textAlign: "center", marginTop: 6, opacity: .8, fontSize: responsiveFontSize(2), }}>New</Text>
                    </View>
                </View>


                <View style={styles.inputfield}>
                    <View style={styles.spacebetween}>
                        <Text style={styles.label}>
                            Price
                        </Text>

                        <TouchableOpacity
                        // onPress={() => { setprize(dvalue) }}
                        >
                            <Text style={styles.link}>
                                set default value
                            </Text>
                        </TouchableOpacity>


                    </View>
                    <TextInput placeholder='Price' style={[styles.input, { borderRadius: responsiveWidth(2) }]} keyboardType='numeric'

                        value={prize} onChangeText={e => setprize(e)}
                    ></TextInput>
                </View>

                <View style={styles.inputfield}>
                    <Text style={styles.label}>
                        Special Note
                    </Text>
                    <TextInput placeholder='Special Note'
                        value={specialNote} onChangeText={e => setspecialNote(e)}
                        style={[styles.input, { borderRadius: responsiveWidth(2) }]} numberOfLines={3} textAlignVertical="top" multiline={true} />
                </View>


                <View style={styles.inputfield}>
                    <Text style={[styles.label, styles.newLable]}>
                        Delivery Date
                    </Text>
                    <View style={styles.datebox}>

<Text style={styles.inputdate}>{ddate}</Text>

<Text style={styles.inputdate}>{dmonth}</Text>
<Text style={styles.inputyear}>{dyear}</Text>



<View style={styles.datePicker}>
  {!isPickerShow && (
    <View style={styles.btnContainer}>
      <FontAwesome5 name="calendar-alt" size={30} color="black" onPress={showPicker} />
    </View>
  )}

  {isPickerShow && (
    <DateTimePicker
      value={date}
      mode={'date'}
      display={Platform.OS === 'ios' ? 'spinner' : 'default'}
      is24Hour={true}
      onChange={onChange}
      style={styles.datePicker}
    />
  )}
</View>


</View>
                </View>

                <View style={[styles.inputfield, { marginTop: responsiveHeight(2) }]}>
                    <Text style={[styles.label, { top: responsiveHeight(.8) }]}>
                        Urgent Order
                    </Text>

                    <View style={{ display: "flex", flexDirection: "row", }}>
                        <RadioButton
                            value="Yes"
                            status={checked === 'Yes' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('Yes')}
                            color="#56BC1F"
                            uncheckedColor='#56BC1F'
                        />
                        <Text style={{ textAlign: "center", marginTop: 6, opacity: .8, fontSize: responsiveFontSize(2), }}>Yes</Text>
                        <View style={{ marginLeft: 10 }}>
                            <RadioButton
                                value="No"
                                status={checked === 'No' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('No')}
                                color="#56BC1F"
                                uncheckedColor='#56BC1F'
                            />
                        </View>
                        <Text style={{ textAlign: "center", marginTop: 6, opacity: .8, fontSize: responsiveFontSize(2), }}>No</Text>
                    </View>
                </View>

            </View>
            <View style={[{ marginTop: responsiveHeight(3) }]}>

                {
                    (ddate === '' || Ordertype === '') ?

                        <TouchableOpacity style={[styles.onlybtn, { opacity: .5 }]} disabled>
                            <Text style={styles.onlybtntext}>Next</Text>
                        </TouchableOpacity>

                        :
                        urgent === 'Old' ?
                            <TouchableOpacity style={styles.onlybtn} onPress={() => navigation.navigate('Old Mesurment', {
                                id: id,
                                obid: customerid,
                                otype: Ordertype,
                                Measurment: Measurment,
                                specialNote: specialNote,
                                prize: prize,
                                ddate: ddate,
                                dmonth: dmonth,
                                dyear: dyear,
                                checked: checked,
                                dvalue: dvalue,
                                imgurl: imgurl

                            })}  >
                                <Text style={styles.onlybtntext}>Next</Text>
                            </TouchableOpacity>
                            : <TouchableOpacity style={styles.onlybtn} onPress={() => { Add_measurment() }}   >
                                <Text style={styles.onlybtntext}>Next</Text>
                            </TouchableOpacity>
                }
            </View>

                </ScrollView>

    )
}

export default AddOrder
