import {BackHandler, Alert, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import ProductList from './ProductList';

export default function UseFetchProductListItems({navigation}) {
  const [productItem, setProductItem] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    GetProductdata();
    BackHandler.addEventListener('hardwareBackPress', backAction);
    navigation.addListener('focus', () => {
      GetProductdata();
    });
  }, []);
  backAction = () => {
    if (!navigation.isFocused()) {
      return false;
    }
    Alert.alert('Exit App', 'Are you sure you want to exit app?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'YES', onPress: () => BackHandler.exitApp()},
    ]);
    return true;
  };

  const GetProductdata = () => {
    setIsLoading(true);
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(result => {
        setIsLoading(false);
        if (Array.isArray(result?.products)) {
          setProductItem(result.products);
        } else {
          setProductItem([]);
        }
      });
  };

  return (
    <ProductList
      itemList={productItem}
      isLoading={isLoading}
      navigation={navigation}
    />
  );
}
