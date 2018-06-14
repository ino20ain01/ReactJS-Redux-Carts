let initialState = [
    {
        id: 1,
        name: 'IPhone 7 Plus',
        image: '',
        description: 'Sản phẩm do Apple sản xuất',
        price: 500,
        inventory: 10
    },
    {
        id: 2,
        name: 'IPhone 8',
        image: '',
        description: 'Sản phẩm do Apple sản xuất',
        price: 600,
        inventory: 11
    },
    {
        id: 3,
        name: 'IPhone X',
        image: '',
        description: 'Sản phẩm do Apple sản xuất',
        price: 600,
        inventory: 12
    }
];

const products = (state = initialState, actions) => {
    switch (actions.type) {
        default: return state;
    }
}

export default products;