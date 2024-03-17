import { StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
export const fonts = {
    s: 16,
  };

const primaryColor = "#56BC1F"
const errorColor = "#ff0000"





const styles = StyleSheet.create({

    
    input: {
        paddingVertical: responsiveHeight(1),
        paddingHorizontal: responsiveWidth(5),
        backgroundColor: "#f5f5f5",
        fontSize: responsiveFontSize(2),
    },
    flatlistheader: {
        paddingTop: responsiveHeight(2),
        marginHorizontal: responsiveWidth(8),
        paddingBottom: responsiveHeight(2)

    },
    headername: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    headernametext: {
        fontSize: responsiveFontSize(4),
    },
    headericon: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    flatlistcontainer: {
        marginHorizontal: responsiveWidth(8),
        marginVertical: responsiveHeight(1.2)
    },
    spacebetween: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    flexstart: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    avtar: {
        width: responsiveWidth(14),
        height: responsiveWidth(14),
        borderRadius: responsiveWidth(7)
    },
    titletext: {
        fontSize: responsiveFontSize(2.4),
    },


});

export { styles }

// #56BC1F green
