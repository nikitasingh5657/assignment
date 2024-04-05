import {ADD_TO_CART, EMPTY_CART, REMOVE_ITEM_FROM_CART} from '../actionType';

const initialSate = {
  productList: [],
};

export const CartItemReducer = (state = initialSate, action) => {
  const newItem = action.payload;

  switch (action.type) {
    case ADD_TO_CART:
      return {...state, productList: [...state.productList, action.payload]};
    case EMPTY_CART:
      return {
        ...state,
        productList: [],
      };
    case REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        productList: state.productList.filter(
          item => item.id != action.payload,
        ),
      };
    // case 'INCREMENT_QTY':
    //   return {
    //     ...state,
    //     productList: state.productList.map(item =>
    //       item.id === newItem.id ? {...item, qty: action.payload.qty} : item,
    //     ),
    //   };
    default:
      return state;
  }
};
