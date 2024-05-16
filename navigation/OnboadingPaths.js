import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onbording1 from "../screens/Onboarding/Onbording1";
import Onbording2 from "../screens/Onboarding/Onbording2";
import Onbording3 from "../screens/Onboarding/Onbording3";
import Registeration from "../screens/Auth/Registeration";

const Stack = createNativeStackNavigator();

const OnboadingPaths = () => {
  return (
    <Stack.Navigator initialRouteName="Onbording1">
      <Stack.Screen
        name="Onbording1"
        component={Onbording1}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Onbording2"
        component={Onbording2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Onbording3"
        component={Onbording3}
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

export default OnboadingPaths;
