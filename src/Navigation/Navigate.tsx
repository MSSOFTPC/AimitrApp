import React, {useEffect, useCallback} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import AuthRoute from './Router/NoauthRouter';
import { RootState } from '../Redux/Store';
import ProtectedRouter from './Router/ProtectedRouter';

const Navigate = (props) => {
  const {user, isAuth } = useSelector((i:RootState) => i.AuthSlice);
  const dispatch = useDispatch();
  
  return (
    <NavigationContainer>
        {isAuth ? <ProtectedRouter /> : <AuthRoute />}
    </NavigationContainer>
  );
};

export default Navigate;