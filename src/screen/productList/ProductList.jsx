// import {UseFetchProductListItems} from 'hooks/UseFetchProductListItems';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Loader from '../../component/Loader';
import {useDispatch, useSelector} from 'react-redux';

const ProductList = (props = {}) => {
  const {itemList, isLoading, emptymsg = 'No Record Found', navigation} = props;
  const dispatch = useDispatch();
  const products = useSelector(state => state.itemList);
  // dispatch({ type: "ADD_TO_ARRAY", payload: obj });

  const addCart = item => {
    dispatch({type: 'ADD_TO_ARRAY', payload: item});
    navigation.navigate('ProductDetail', {id: item.id});
  };
  const emptyComponent = () => {
    return (
      isLoading == false && (
        <View>
          <Text>{emptymsg}</Text>
        </View>
      )
    );
  };
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          addCart(item);
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

  return (
    <View>
      <Loader loadingTxt={'Loading...'} loadingState={isLoading} />
      <FlatList
        data={itemList}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.id.toString()}
        ListEmptyComponent={emptyComponent}
      />
    </View>
  );
};

export default ProductList;
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
