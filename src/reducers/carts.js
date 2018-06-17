import * as Types from './../constants/ActionType';

let data = JSON.parse(localStorage.getItem('CART'));
let initialState = data ? data : [];

let findProductInCart = (carts, product) => {
    let index = -1;
    if (carts.length) {
        for (let i = 0; i < carts.length; i++) {
            if (carts[i].product.id === product.id) {
                index = i;
                break;
            }
        }
    }
    return index;
};

const carts = (state = initialState, actions) => {

    let { product, quantity } = actions;
    let index = -1;
    switch (actions.type) {
        case Types.ADD_TO_CART:
            index = findProductInCart(state, product);
            if (index !== -1) {
                state[index].quantity += quantity;
            } else {
                state.push({
                    product,
                    quantity
                });
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case Types.DELETE_PRODUCT_IN_CART:
            index = findProductInCart(state, product);
            if (index !== -1) {
                state.splice(index, 1);
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        case Types.UPDATE_PRODUCT_IN_CART:
            index = findProductInCart(state, product);
            if (index !== -1) {
                state[index].quantity = quantity;
            }
            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];
        default: return state;
    }
}

export default carts;