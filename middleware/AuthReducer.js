import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useReducer, useMemo } from "react";

// Define your initial state for authentication
const initialLoginState = {
  isloading: true,
  userName: null,
  userToken: null,
  id: null,
};

// Create your login reducer function
const loginReducer = (prevState, action) => {
  switch (action.type) {
    case "RETRIEVE_TOKEN":
      return {
        ...prevState,
        userToken: action.token,
        isloading: false,
      };
    case "LOGIN":
      return {
        ...prevState,
        username: action.id,
        userToken: action.token,
        isloading: false,
      };
    case "LOGOUT":
      return {
        ...prevState,
        username: null,
        userToken: null,
        isloading: false,
      };
    case "REGISTER":
      return {
        ...prevState,
        username: action.id,
        userToken: action.token,
        isloading: false,
      };
    default:
      return prevState;
  }
};

// Create your AuthContext
export const AuthContext = React.createContext();

// Create your AuthProvider component
export const AuthProvider = ({ children }) => {
  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  const authContext = useMemo(
    () => ({
      signin: async (id, email) => {
        let userToken;
        userToken = null;

        if (id) {
          try {
            userToken = String(id);
            await AsyncStorage.setItem("userToken", userToken);
          } catch (e) {
            console.log("This is error " + e);
            throw e;
          }
        }
        dispatch({ type: "LOGIN", id: id, token: userToken });
      },
      presignin: async (id) => {
        let userToken;
        userToken = null;

        if (id) {
          try {
            userToken = String(id);
          } catch (e) {
            console.log("This is error " + e);
            throw e;
          }
        }
        dispatch({ type: "REGISTER", token: userToken });
      },
      signout: async () => {
        try {
          await AsyncStorage.removeItem("userToken");
        } catch (e) {
          console.log(e);
          throw e;
        }

        dispatch({ type: "LOGOUT" });
      },
      signup: () => {
        setuserToken("tailor");
      },
      userToken: loginState.userToken,
    }),
    []
  );

  return (
    <AuthContext.Provider value={{ loginState, authContext }}>
      {children}
    </AuthContext.Provider>
  );
};
