
export const checkIfInCart = (cart_products, detail_key) => {
    console.log(cart_products.some(product => product.sizes[0].detail_key===9))
};

