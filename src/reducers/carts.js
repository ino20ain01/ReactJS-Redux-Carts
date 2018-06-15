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
    },
    {
        product: {
            id: 2,
            name: 'IPhone 8',
            image: 'https://johnsen.no/assets/img/1024/1024/bilder_nettbutikk/ee9f9269d839011cfdb5266b72e622e9-image.jpeg',
            description: 'Sản phẩm do Apple sản xuất',
            price: 600,
            inventory: 11,
            rating: 4
        },
        quantity: 6
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