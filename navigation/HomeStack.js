// HomeStack.js
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { useFonts } from 'expo-font/build/FontHooks';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import Home from '../screens/Home';
import ShopProfile from '../screens/Shop/ShopProfile';
import ShopHome from '../screens/Shop/ShopHome';



const Tab = createBottomTabNavigator();

export default function HomeStack({ route }) {
  const navigation = useNavigation();
  const [Fontloaded] = useFonts({
    'Bold': require('../assets/Font/Roboto-Bold.ttf'),
    'Regular': require('../assets/Font/Roboto-Regular.ttf'),
  });

  if (!Fontloaded) {
    return null;
  }
  console.log(route.params.id);
  const id = route.params.id;

  if (route.params) {
    console.log(route.params);
    console.log("route.params.id");
  } else {
    console.log("No params received in HomeStack");
  }

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#56BC1F",
        tabBarStyle: {
          height: 60,
          shadowColor: '#000',
          shadowOpacity: 1,
          shadowRadius: 3,
          elevation: 15,
          shadowOffset: { height: -400, width: 0 },
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
      }}
    >
      <Tab.Screen
        name="Costomer"
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="people"
                size={24}
                color={focused ? "#fff" : "#56BC1F"}
                style={{ padding: 0, margin: 0 }}
              />
            );
          },
          tabBarActiveTintColor: "#fff",
          tabBarActiveBackgroundColor: "#56BC1F",
          headerRight: () => (
            <AntDesign
              name="plus"
              size={24}
              color="black"
              style={{ marginRight: 15 }}
              onPress={() => {
                navigation.navigate("Add Costomer", {
                  id: id,
                });
              }}
            />
          ),
        }}
        component={ShopHome}
        initialParams={{ id: id }}
      />

      <Tab.Screen
        name="Order"
        options={{
          tabBarIcon: ({ focused }) => {
            return (
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
        component={Home}
        initialParams={{ id: id }}
      />

      <Tab.Screen
        name="Urgent"
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialIcons
                name="watch-later"
                size={24}
                color={focused ? "#fff" : "#56BC1F"}
              />
            );
          },
          tabBarActiveTintColor: "#fff",
          tabBarActiveBackgroundColor: "#56BC1F",
        }}
        component={Home}
        initialParams={{ id: id }}
      />

      <Tab.Screen
        name="shopprofile"
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="person"
                size={22}
                color={focused ? "#fff" : "#56BC1F"}
              />
            );
          },
          tabBarActiveTintColor: "#fff",
          tabBarActiveBackgroundColor: "#56BC1F",
        }}
        component={ShopProfile}
        initialParams={{ id: id }}
      />
    </Tab.Navigator>
  );
}
