import React, { useContext} from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddCustomer from "../../screens/Customer/AddCustomer";
import { AuthContext } from "../../middleware/AuthReducer";

const Customerroute = () => {
  const Stack = createNativeStackNavigator();

  // Access the AuthContext
  const { loginState, authContext } = useContext(AuthContext);

  const id = loginState.userToken;

  return (
 
    <Stack.Navigator initialRouteName="AddCustomer">
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
    </Stack.Navigator>
  );
};

export default Customerroute;