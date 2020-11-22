import shoppingCartService from "../services/cart_products";

const initialState = {
  cart_products: [],
};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (state.cart_products.length >= 10) {
        // eslint-disable-next-line no-alert
        alert("Maximum amount of products in cart is 10");
        return { ...state };
      } else {
        return {
          ...state,
          cart_products: [...state.cart_products, action.data],
        };
      }

    case "REMOVE_ITEM":
      return {
        ...state,
        cart_products: state.cart_products.filter(
          (product) => product.sizes[0].detail_key !== action.data
        ),
      };

    case "INCREASE-QUANTITY":
      const incr_id = action.data;
      const incr_product_to_change = state.cart_products.find(
        (p) => p.sizes[0].detail_key === incr_id
      );
      const incr_changedProduct = {
        ...incr_product_to_change,
        quantity: incr_product_to_change.quantity + 1,
      };
      return {
        ...state,
        cart_products: state.cart_products.map((product) =>
          product.sizes[0].detail_key !== action.data ? product : incr_changedProduct
        ),
      };
    
    case "DECREASE-QUANTITY":
        const decr_id = action.data;
        const decr_product_to_change = state.cart_products.find(
          (p) => p.sizes[0].detail_key === decr_id
        );
        const decr_changedProduct = {
          ...decr_product_to_change,
          quantity: decr_product_to_change.quantity - 1,
        };
        return {
          ...state,
          cart_products: state.cart_products.map((product) =>
            product.sizes[0].detail_key !== action.data ? product : decr_changedProduct
      ),
    };
  
    case "INIT_SHOPCART_PRODUCTS":
      return { ...state, cart_products: action.data };
    default:
      return state;
  }
};

export const newCartItem = (cartItemDetailKey) => async (dispatch) => {
  const newCartItem = await shoppingCartService.addToCart({
    product_detail_id: cartItemDetailKey,
  });
  dispatch({
    type: "ADD_ITEM",
    data: newCartItem,
  });
};

export const increaseQuantity = (cartItemDetailKey) => async (dispatch) => {
    await shoppingCartService.increaseQuantity(cartItemDetailKey);
    dispatch({
      type: "INCREASE-QUANTITY",
      data: cartItemDetailKey,
    });
};

export const decreaseQuantity = (cartItemDetailKey) => async (dispatch) => {
  await shoppingCartService.decreaseQuantity(cartItemDetailKey);
  dispatch({
    type: "DECREASE-QUANTITY",
    data: cartItemDetailKey,
  });
};

export const removeCartItem = (cartItemDetailKey) => async (dispatch) => {
  await shoppingCartService.removeFromCart(cartItemDetailKey);
  dispatch({
    type: "REMOVE_ITEM",
    data: cartItemDetailKey,
  });
};

export const initializeShoppingCartProducts = () => async (dispatch) => {
  const cart_products = await shoppingCartService.getCartProducts();
  dispatch({
    type: "INIT_SHOPCART_PRODUCTS",
    data: cart_products,
  });
};

export default shoppingCartReducer;
