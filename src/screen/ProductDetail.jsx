import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import Loader from '../component/Loader';

export default function ProductDetail({props, route}) {
  const [productDetails, setProductDetails] = useState(null);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    GetProductdata();
  }, []);

  const GetProductdata = () => {
    setSpinner(true);
    fetch(`https://dummyjson.com/products/${route.params.id}`)
      .then(res => res.json())
      .then(result => {
        setSpinner(false);
        setProductDetails(result);
      });
  };

  return (
    <View>
      <Loader loadingTxt={'Loading...'} loadingState={spinner} />

      {productDetails && (
        <View style={styles.conatiner}>
          <View style={styles.imageWrapper}>
            <Image
              style={{width: 200, height: 200, borderRadius: 100}}
              source={{
                uri: productDetails.thumbnail,
              }}
            />
          </View>
          <View style={styles.descWrapper}>
            <Text style={styles.productTitle}>{productDetails.title}</Text>
            <Text style={styles.productDesc}>
              Desc :- {productDetails.description}
            </Text>
            <Text style={styles.productBrand}>
              Brand :- {productDetails.brand}
            </Text>
            <Text style={styles.productPrice}>
              Price :- ${productDetails.price}
            </Text>
          </View>
        </View>
      )}
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
