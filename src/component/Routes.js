import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDetail from '../screen/productDetails';
// import ProductList from '../screen/productList';
import useFetchProductListItems from '../screen/productList';
import UseFetchProductDetail from '../screen/productDetails';

const Stack = createNativeStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductList">
        <Stack.Screen
          name="ProductDetail"
          component={UseFetchProductDetail}
          options={{
            headerTitle: 'Product Details',
          }}
        />
        <Stack.Screen
          name="ProductList"
          component={useFetchProductListItems}
          options={{
            headerTitle: 'Products',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
