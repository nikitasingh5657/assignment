import React, {useMemo} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Loader from '../../component/Loader';
import UseFetchUserDetails from '../userDetails';

const UsersList = (props = {}) => {
  const {itemList, isLoading, emptymsg = 'No Record Found', navigation} = props;

  const emptyComponent = () => {
    return (
      isLoading == false && (
        <View>
          <Text>{emptymsg}</Text>
        </View>
      )
    );
  };

  // useMemo to memoize the renderItem function if it is a complex computation and its result
  const renderItem = useMemo(() => {
    return ({item}) => {
      return (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('UserDetail', {id: item.id});
          }}>
          <View style={styles.card}>
            <View>
              <Text
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                  backgroundColor: '#BFBFBF',
                }}>
                {item.id}
              </Text>
            </View>
            <View style={styles.descWrapper}>
              <Text>{item.title}</Text>
              <Text style={styles.desc}>Description :- {item.body}</Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    };
  }, [navigation]);

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

export default UsersList;
const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    padding: 10,
    margin: 12,
    borderRadius: 5,
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  descWrapper: {
    marginStart: 2,
    width: 220,
  },
});
