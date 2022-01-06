
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AuthStackNavigation from './src/navigations/StackNavigation';
import LoginScreen from "./src/screens/LoginScreen";
import ForgotPasswordScreen from "./src/screens/ForgotPasswordScreen";

const Stack = createStackNavigator();

const App = () => {
 
  return (
    <NavigationContainer>  
      <AuthStackNavigation/>
    </NavigationContainer>
  )
}

export default App;