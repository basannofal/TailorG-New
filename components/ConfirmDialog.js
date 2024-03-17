import { styles } from "../styles/style";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const ConfirmDialog = ({
  visible,
  onConfirm,
  onCancel,
  message,
  btnname,
  title,
}) => {
  return (
    <Modal animationType="slide" transparent visible={visible}>
      <View style={styles.viewWrapper}>
        <View style={styles.modalView}>
          <Text style={[styles.modelAlertlabel]}>{title}</Text>
          <Text style={[styles.modelalertdec, { marginTop: 10 }]}>
            {message}
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
                onPress={onCancel}
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
                { marginLeft: responsiveWidth(3.4), paddingVertical: 10 },
              ]}
            >
              <TouchableOpacity
                onPress={onConfirm}
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
                  {btnname}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmDialog;
