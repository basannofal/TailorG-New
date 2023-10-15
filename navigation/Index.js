import React, { useContext, useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../middleware/AuthReducer";
import Splash from "../screens/utils/Splash";
import Shoproute from "./routes/Shoproute";
import Authroute from "./routes/Authroute";
import Onboardingroute from "./routes/Onboardingroute";
import Customerroute from "./routes/Customerroute";

const Index = () => {
  const Stack = createNativeStackNavigator();

  // Access the AuthContext
  const { loginState, authContext } = useContext(AuthContext);

  const id = loginState.userToken;
  const [isFirstLaunch, setIsFirstLaunch] = useState(null); // State to track if it's the first launch

  useEffect(() => {
    // Check if it's the first launch
    const checkFirstLaunch = async () => {
      let hasLaunched = await AsyncStorage.getItem("hasLaunched");
      if (hasLaunched === null) {
        setIsFirstLaunch(true);
        AsyncStorage.setItem("hasLaunched", "true");
      } else {
        // AsyncStorage.removeItem("hasLaunched");
        setIsFirstLaunch(false);
      }
    };

    checkFirstLaunch();

    // assign id to token for logged user
    setTimeout(async () => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem("userToken");
      } catch (e) {
        console.log(e);
        throw e;
      }
      await authContext.presignin(userToken);
      // dispatch({ type: "RAGISTER", token: userToken });
    }, 1000);
  }, []);

  if (loginState.isloading) {
    return <Splash />;
  }

  return (
    isFirstLaunch != null && (
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#56BC1F",
          },
          headerTitleStyle: {
            fontSize: 22,
            fontWeight: "bold",
            color: "white",
          },
          contentStyle: {
            backgroundColor: "#f8f8f8",
          },
          headerShown: false,
          statusBarColor: "#000",
        }}
      >
        {isFirstLaunch && (
          <>
            <Stack.Screen name="Onbordingroute" component={Onboardingroute} />
          </>
        )}
        {loginState.userToken === null ? (
          <>
            <Stack.Screen name="Authroute" component={Authroute} />
          </>
        ) : (
          <>
            <Stack.Screen name="Shoproute" component={Shoproute} />
            <Stack.Screen name="Customerroute" component={Customerroute} />
          </>
        )}
      </Stack.Navigator>
    )
  );
};

export default Index;
