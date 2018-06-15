import * as types from './../constants/ActionType';

// let data = JSON.parse(localStorage.getItem('CART'));
// let initialState = data ? data : [];
let initialState = [
    {
        product: {
            id: 1,
            name: 'IPhone 7 Plus',
            image: 'http://yerevanmobile.am/wp-content/uploads/2016/12/1-4.png',
            description: 'Sản phẩm do Apple sản xuất',
            price: 500,
            inventory: 10,
            rating: 4
        },
        quantity: 69
    }
];

const carts = (state = initialState, actions) => {
    switch (actions.type) {
        case types.ADD_TO_CART:
            console.log(actions);
            return [...state];
        default: return state;
    }
}

export default carts;