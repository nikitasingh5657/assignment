import {BackHandler, Alert, Text} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import UsersList from './usersList';

export default function UseFetchUserList({navigation}) {
  const [userList, setUserList] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    getUserList();
    BackHandler.addEventListener('hardwareBackPress', backAction);
    navigation.addListener('focus', () => {
      getUserList();
    });
  }, [getUserList]);

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

  // useCallback to memoize the getuserList function itself, ensuring that it only changes when its dependencies change.
  const getUserList = useCallback(() => {
    setIsLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(res => res.json())
      .then(result => {
        setIsLoading(false);
        if (Array.isArray(result)) {
          setUserList(result);
        } else {
          setUserList([]);
        }
      });
  }, []);

  return (
    <UsersList
      itemList={userList}
      isLoading={isLoading}
      navigation={navigation}
    />
  );
}
