import React, { useContext, useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../screens/Auth/Login";
import Registeration from "../../screens/Auth/Registeration";

const Authroute = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Registeration"
        component={Registeration}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Authroute;
