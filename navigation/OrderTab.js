import React from "react";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import Order from "../screens/Order/Order";
import { useFonts } from "expo-font/build/FontHooks";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function OrderTab({ route }) {
  // Your CustomerTab component code here...

  const [Fontloaded] = useFonts({
    Bold: require("../assets/Font/Roboto-Bold.ttf"),
    Regular: require("../assets/Font/Roboto-Regular.ttf"),
  });

  if (!Fontloaded) {
    return null;
  }

  const id = route.params.id;
  const obid = route.params.obid;

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#56BC1F",
        tabBarInactiveTintColor: "#56BC1F",
        tabBarStyle: {
          height: 60,
          shadowColor: "#56BC1F",
          shadowOpacity: 1,
          shadowRadius: 3,
          elevation: 20,
          shadowOffset: { height: -100, width: -100 },
        },
        tabBarLabelStyle: {
          fontSize: responsiveFontSize(1.5),
          marginBottom: 8,
          fontFamily: "Regular",
        },
        tabBarShowLabel: true,
        tabBarIconStyle: {
          top: 5,
        },
        // tabBarActiveBackgroundColor:"#000",
      }}
    >
      <Tab.Screen
        name="Detail"
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialCommunityIcons
                name="card-account-details-outline"
                size={24}
                color={focused ? "#fff" : "#56BC1F"}
              />
            );
          },

          tabBarActiveTintColor: "#fff",
          tabBarActiveBackgroundColor: "#56BC1F",
        }}
        component={OrderDatail}
        initialParams={{ id: id, obid: obid }}
      />
      <Tab.Screen
        name="Measure"
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <AntDesign
                name="menufold"
                size={24}
                color={focused ? "#fff" : "#56BC1F"}
              />
            );
          },

          tabBarActiveTintColor: "#fff",
          tabBarActiveBackgroundColor: "#56BC1F",
        }}
        component={OrderDatail}
        initialParams={{ id: id, obid: obid }}
      />

      <Tab.Screen
        name="Order"
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              // <MaterialIcons name="bookmark-border" size={24} color="black" />
              <MaterialCommunityIcons
                name="note-text"
                size={26}
                color={focused ? "#fff" : "#56BC1F"}
              />
            );
          },

          tabBarActiveTintColor: "#fff",
          tabBarActiveBackgroundColor: "#56BC1F",
        }}
        component={Order}
        initialParams={{ id: id, obid: obid }}
      />
    </Tab.Navigator>
  );
}
