import React, { useContext, useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeStack from "../HomeStack";
import { AuthContext } from "../../middleware/AuthReducer";
import AddCustomer from "../../screens/Customer/AddCustomer";
import AllDresses from "../../screens/Shop/Dresses/AllDresses";
import AllMeasurmentParts from "../../screens/Shop/MeasurmentParts/AllMeasurmentParts";

const Shoproute = () => {
  const Stack = createNativeStackNavigator();

  // Access the AuthContext
  const { loginState, authContext } = useContext(AuthContext);

  const id = loginState.userToken;

  return (
 
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{
            headerShown: false,
            statusBarHidden: false,
            statusBarColor: "#000",
          }}
          name="Home"
          component={HomeStack}
          initialParams={{ id: id }}
        />
        <Stack.Screen
          options={{
            headerShown: false,
            statusBarHidden: false,
            statusBarColor: "#000",
          }}
          name="AddCustomer"
          component={AddCustomer}
          initialParams={{ id: id }}
        />
        <Stack.Screen
          options={{
            headerShown: false,
            statusBarHidden: false,
            statusBarColor: "#000",
          }}
          name="AllDresses"
          component={AllDresses}
          initialParams={{ id: id }}
        />
        <Stack.Screen
          options={{
            headerShown: false,
            statusBarHidden: false,
            statusBarColor: "#000",
          }}
          name="AllMeasurmentParts"
          component={AllMeasurmentParts}
          initialParams={{ id: id }}
        />
    </Stack.Navigator>
  );
};

export default Shoproute;
