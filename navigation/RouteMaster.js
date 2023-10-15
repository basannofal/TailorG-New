import React, { useContext, useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContext } from "../middleware/authReducers";
import HomeStack from "./HomeStack";
import Authroute from "./routes/Authroute";
import Shoproute from "./routes/Shoproute";
import OnboadingPaths from "./OnboadingPaths";

const RouteMaster = () => {
  const Stack = createNativeStackNavigator();

  // Access the AuthContext
  const { userToken } = useContext(AuthContext);

  const id = userToken;

  return (
    // <Stack.Navigator
    //   screenOptions={{
    //     headerStyle: {
    //       backgroundColor: "#56BC1F",
    //     },
    //     headerTitleStyle: {
    //       fontSize: 22,
    //       fontWeight: "bold",
    //       color: "white",
    //     },
    //     contentStyle: {
    //       backgroundColor: "#f8f8f8",
    //     },
    //     headerShown: false,
    //     statusBarColor: "#000",
    //   }}
    //   initialRouteName="Login"
    // >
    //   <>
    //     <Shoproute />
    //   </>
    // </Stack.Navigator>
    <>
      <OnboadingPaths />
      <Authroute />
    </>
  );
};

export default RouteMaster;
