import { NavigationContainer } from "@react-navigation/native";
import Index from "./navigation/Index";
import { AuthProvider } from "./middleware/AuthReducer";

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Index />
      </NavigationContainer>
    </AuthProvider>
  );
}
