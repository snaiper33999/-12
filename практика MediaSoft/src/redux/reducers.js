import { combineReducers } from 'redux';
import { ADD_TO_CART, REMOVE_FROM_CART } from './actions';

const initialState = {
  cart: [],
};

// Редьюсер для корзины
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingProductIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingProductIndex !== -1) {
        // Увеличиваем количество товара, если он уже есть в корзине
        const updatedCart = [...state.cart];
        updatedCart[existingProductIndex].quantity += 1;
        return { ...state, cart: updatedCart };
      } else {
        // Добавляем новый товар в корзину
        return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] };
      }

    case REMOVE_FROM_CART:
      // Удаляем товар из корзины по ID
      const filteredCart = state.cart.filter((item) => item.id !== action.payload);
      return { ...state, cart: filteredCart };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;