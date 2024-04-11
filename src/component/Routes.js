import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UseFetchUserDetails from '../screen/userDetails';
import UseFetchUserList from '../screen/userList';

const Stack = createNativeStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserList">
        <Stack.Screen
          name="UserDetail"
          component={UseFetchUserDetails}
          options={{
            headerTitle: 'User Details',
          }}
        />
        <Stack.Screen
          name="UserList"
          component={UseFetchUserList}
          options={{
            headerTitle: 'List',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
