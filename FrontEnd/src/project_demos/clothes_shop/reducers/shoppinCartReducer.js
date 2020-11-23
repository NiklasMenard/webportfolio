import shoppingCartService from '../services/cart_products';

const initialState = {
  cart_products: [],
};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        cart_products: [...state.cart_products, action.data],
      };

    case 'REMOVE_ITEM':
      return {
        ...state,
        cart_products: state.cart_products.filter(
          (product) => product.sizes[0].detail_key !== action.data,
        ),
      };

    case 'INCREASE-QUANTITY': {
      const id = action.data;
      const incrProductToChange = state.cart_products.find(
        (p) => p.sizes[0].detail_key === id,
      );
      const changedProduct = {
        ...incrProductToChange,
        quantity: incrProductToChange.quantity + 1,
      };
      return {
        ...state,
        cart_products: state.cart_products.map((product) => (
          product.sizes[0].detail_key !== action.data ? product : changedProduct)),
      };
    }

    case 'DECREASE-QUANTITY': {
      const id = action.data;
      const incrProductToChange = state.cart_products.find(
        (p) => p.sizes[0].detail_key === id,
      );
      const changedProduct = {
        ...incrProductToChange,
        quantity: incrProductToChange.quantity - 1,
      };
      return {
        ...state,
        cart_products: state.cart_products.map((product) => (
          product.sizes[0].detail_key !== action.data ? product : changedProduct)),
      };
    }

    case 'INIT_SHOPCART_PRODUCTS':
      return { ...state, cart_products: action.data };
    default:
      return state;
  }
};

export const newCartItem = (cartItemDetailKey) => async (dispatch) => {
  const cartItem = await shoppingCartService.addToCart({
    product_detail_id: cartItemDetailKey,
  });
  dispatch({
    type: 'ADD_ITEM',
    data: cartItem,
  });
};

export const increaseQuantity = (cartItemDetailKey) => async (dispatch) => {
  await shoppingCartService.increaseQuantity(cartItemDetailKey);
  dispatch({
    type: 'INCREASE-QUANTITY',
    data: cartItemDetailKey,
  });
};

export const decreaseQuantity = (cartItemDetailKey) => async (dispatch) => {
  await shoppingCartService.decreaseQuantity(cartItemDetailKey);
  dispatch({
    type: 'DECREASE-QUANTITY',
    data: cartItemDetailKey,
  });
};

export const removeCartItem = (cartItemDetailKey) => async (dispatch) => {
  await shoppingCartService.removeFromCart(cartItemDetailKey);
  dispatch({
    type: 'REMOVE_ITEM',
    data: cartItemDetailKey,
  });
};

export const initializeShoppingCartProducts = () => async (dispatch) => {
  const cartProducts = await shoppingCartService.getCartProducts();
  dispatch({
    type: 'INIT_SHOPCART_PRODUCTS',
    data: cartProducts,
  });
};

export default shoppingCartReducer;
