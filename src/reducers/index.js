import { combineReducers } from 'redux';
import products from './products';
import carts from './carts';

const appReducers = combineReducers({
    products,
    carts
});

export default appReducers;