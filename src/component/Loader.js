import React from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  View,
  Dimensions,
  Modal,
  Text,
} from 'react-native';

const Loader = ({navigation, loadingState}) => {
  return (
    <View>
      {loadingState ? (
        <Modal transparent={true} animationType="none" visible={true}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: `rgba(0,0,0,0.6)`,
            }}>
            <ActivityIndicator animating={true} color={'black'} size="large" />
            <Text style={{color: 'black'}}>Loading...</Text>
          </View>
        </Modal>
      ) : (
        <View />
      )}
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('window').width,
    height:
      Platform.OS == 'android'
        ? Dimensions.get('window').height
        : Dimensions.get('window').height,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.8)',

    marginTop: 0,
  },
});

// How to use
// In the safe area / view
// <Loader loadingTxt={'Loading...'} loadingState={spinner} />
