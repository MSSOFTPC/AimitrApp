
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../../Screens/Auth/Login/LoginScreen';
import ForgetScreen from '../../Screens/Auth/Forget/ForgetScreen';
import RegisterScreen from '../../Screens/Auth/Register/RegisterScreen';

const AuthRoute = () => {
  const Stack = createStackNavigator();


    return (
      <Stack.Navigator options={{headerShown:true}}   initialRouteName='LoginScreen' screenOptions={{animation:"slide_from_left"}}>
         <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="ForgetScreen"
          component={ForgetScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
  );
};

export default AuthRoute;