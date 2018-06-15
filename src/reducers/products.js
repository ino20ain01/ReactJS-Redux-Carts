let initialState = [
    {
        id: 1,
        name: 'IPhone 7 Plus',
        image: 'http://yerevanmobile.am/wp-content/uploads/2016/12/1-4.png',
        description: 'Sản phẩm do Apple sản xuất',
        price: 500,
        inventory: 10,
        rating: 4
    },
    {
        id: 2,
        name: 'IPhone 8',
        image: 'https://johnsen.no/assets/img/1024/1024/bilder_nettbutikk/ee9f9269d839011cfdb5266b72e622e9-image.jpeg',
        description: 'Sản phẩm do Apple sản xuất',
        price: 600,
        inventory: 11,
        rating: 4
    },
    {
        id: 3,
        name: 'IPhone X',
        image: 'https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-2-400x460.png',
        description: 'Sản phẩm do Apple sản xuất',
        price: 700,
        inventory: 12,
        rating: 5
    }
];

const products = (state = initialState, actions) => {
    switch (actions.type) {
        default: return state;
    }
}

export default products;