import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import Loader from '../../component/Loader';
import ProductDetail from './productDetails';

export default function UseFetchProductDetail({props, route}) {
  const [productDetails, setProductDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    GetProductdata();
  }, []);

  const GetProductdata = () => {
    setIsLoading(true);
    fetch(`https://dummyjson.com/products/${route.params.id}`)
      .then(res => res.json())
      .then(result => {
        setIsLoading(false);
        setProductDetails(result);
      });
  };

  return (
    <View>
      <ProductDetail productDetails={productDetails} isLoading={isLoading} />
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  descWrapper: {
    marginTop: 100,
    padding: 15,
    borderWidth: 2,
    borderRadius: 10,
    marginHorizontal: 10,
    // marginStart: 15,
  },
  imageWrapper: {
    // marginStart: 15,
    marginTop: 50,
  },
  productTitle: {
    fontSize: 20,
    fontWeight: '800',
    textAlign: 'center',
  },
  productDesc: {
    fontSize: 16,
    fontWeight: '400',
  },
  productBrand: {
    fontSize: 16,
    fontWeight: '400',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: '400',
  },
});
