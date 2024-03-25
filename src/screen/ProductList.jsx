import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  BackHandler,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Loader from '../component/Loader';

export default function ProductList({navigation}) {
  const [productList, setProductList] = useState([]);
  const [spinner, setSpinner] = useState(false);

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
    setSpinner(true);
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(result => {
        setSpinner(false);
        setProductList(result.products);
      });
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ProductDetail', {id: item.id});
        }}>
        <View style={styles.card}>
          <View>
            <Image
              style={{width: 100, height: 100, borderRadius: 50}}
              source={{
                uri: item.thumbnail,
              }}
            />
          </View>
          <View style={styles.descWrapper}>
            <Text>{item.title}</Text>
            <Text style={styles.desc}>Description :- {item.description}</Text>
            <Text>Brand :- {item.brand}</Text>
            <Text>Price :-{item.price}$</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const emptyComponent = () => {
    return (
      spinner == false && (
        <View>
          <Text>No Record Found</Text>
        </View>
      )
    );
  };

  return (
    <View>
      <Loader loadingTxt={'Loading...'} loadingState={spinner} />

      <FlatList
        data={productList}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
        ListEmptyComponent={emptyComponent}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    padding: 10,
    margin: 10,
    borderRadius: 5,
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  descWrapper: {
    marginStart: 15,
    width: 220,
  },
  desc: {
    // backgroundColor:'red'
  },
});
