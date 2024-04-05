import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import {RootReducer} from '../reducer/RootReducer';

export const store = createStore(RootReducer, applyMiddleware());
export const persistor = persistStore(store);
export default (store, persistor);
