import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Loader from '../../component/Loader';

const UsersDetails = (props = {}) => {
  const {UserDtls, isLoading} = props;
  return (
    <View>
      <Loader loadingTxt={'Loading...'} loadingState={isLoading} />
      <View style={styles.conatiner}>
        <View style={styles.imageWrapper}>
          {/* <Image
            style={{width: 200, height: 200, borderRadius: 100}}
            source={{
              uri: UserDtls.thumbnail,
            }}
          /> */}
        </View>
        <View style={styles.descWrapper}>
          <Text style={styles.productTitle}>{UserDtls.title}</Text>
          <Text style={styles.productDesc}>Desc :- {UserDtls.body}</Text>
        </View>
      </View>
    </View>
  );
};
export default UsersDetails;
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
