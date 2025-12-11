
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../../Screens/Auth/Login/LoginScreen';
import HomeScreen from '../../Screens/Protected/Home/Home';
import CoursesScreen from '../../Screens/Protected/Courses/Courses';
import SingleCourse from '../../Screens/Protected/SingleCourse/SingleCourse';
import MainScreen from '../../Screens/Protected/Dashboard/Main/Main';
import MyCourses from '../../Screens/Protected/Dashboard/MyCourses/MyCourses';
import Verification from '../../Screens/Protected/Dashboard/Verification/Verification';
import Referrals from '../../Screens/Protected/Dashboard/Referrals/Referrals';
import Notifications from '../../Screens/Protected/Dashboard/Notifications/Notifications';
import Profile from '../../Screens/Protected/Dashboard/Profile/Profile';
import CoursePlay from '../../Screens/Protected/Dashboard/CoursePlay/CoursePlay';
import { useDispatch, useSelector } from 'react-redux';
import { IUser } from '../../api/Users/Auth/AuthType';
import { RootState } from '../../Redux/Store';
import { useEffect } from 'react';
import { RefreshAction } from '../../api/Users/Auth/Auth';
import { login, logout } from '../../Redux/Slices/AuthSlice';
import { setToken } from '../../api/BaseApi';
import { toast } from '@backpackapp-io/react-native-toast';
import CoursesPackageScreen from '../../Screens/Protected/Courses/CoursesPackage';

const ProtectedRouter = () => {
  const Stack = createStackNavigator();
  const {user,isAuth} = useSelector((i:RootState)=>i.AuthSlice) as {user:IUser|null,isAuth:boolean}
  const dispatch = useDispatch()

  // refresh
   useEffect(()=>{
     if(isAuth){
      //  RefreshAction({
      //   onSuccess:(res)=>{
      //     dispatch(login(res))
      //     setToken(user?.refreshToken as string)
      //   },
      //   onFailed:()=>{
      //     dispatch(logout())
      //     toast.error("Sesson Expired")
      //   }
      // })
     }
    },[isAuth])


    return (
      <Stack.Navigator options={{headerShown:true}} initialRouteName='Home' screenOptions={{header:true,animation:"slide_from_left"}}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CoursesScreen"
          component={CoursesScreen}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="CoursesPackageScreen"
          component={CoursesPackageScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SingleCourseeScreen"
          component={SingleCourse}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="MyCourses"
          component={MyCourses}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Verification"
          component={Verification}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Referrals"
          component={Referrals}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="ProfileScreen"
          component={Profile}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="CoursePlay"
          component={CoursePlay}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
  );
};

export default ProtectedRouter;