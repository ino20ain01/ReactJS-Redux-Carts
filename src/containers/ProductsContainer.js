import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Product from '../components/Product';
import Products from '../components/Products';
import { actAddToCart, actChangeMessage } from '../actions';

class ProductsContainer extends Component {

    showProducts = products => {
        let result = null;
        let { onAddToCart, onChangeMessage } = this.props;
        if (products.length) {
            result = products.map((product, index) => {
                return <Product
                            key={ index }
                            product={ product }
                            onAddToCart={ onAddToCart }
                            onChangeMessage={ onChangeMessage }
                        />
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

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        })
    ).isRequired,
    onChangeMessage: PropTypes.func.isRequired,
    onAddToCart: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: products => {
            dispatch(actAddToCart(products, 1));
        },
        onChangeMessage: message => {
            dispatch(actChangeMessage(message));
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
