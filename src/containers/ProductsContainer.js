import React, {Component} from 'react';
import { connect } from 'react-redux';
import Product from '../components/Product';
import Products from '../components/Products';

class ProductsContainer extends Component {

    showProducts = products => {
        let result = null;
        if (products.length) {
            result = products.map((product, index) => {
                return <Product key={ index } product={ product } />
            });
        }
        return result;
    }

    render() {

        let { products } = this.props;
        return (
            <Products>
                { this.showProducts(products) }
            </Products>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, null)(ProductsContainer);
