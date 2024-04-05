import {CartItemReducer} from './CartItemReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';

const cartConfig = {
  key: 'root',
  storage: AsyncStorage,
};

export const RootReducer = combineReducers({
  CartItemReducer: persistReducer(cartConfig, CartItemReducer),
});
