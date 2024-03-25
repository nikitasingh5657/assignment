import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDetail from '../screen/ProductDetail';
import ProductList from '../screen/ProductList';

const Stack = createNativeStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductList">
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{
            headerTitle: 'Product Details',
          }}
        />
        <Stack.Screen
          name="ProductList"
          component={ProductList}
          options={{
            headerTitle: 'Products',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
