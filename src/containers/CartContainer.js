import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as Message from '../constants/Message'
import Carts from '../components/Carts';
import CartItem from '../components/CartItem'
import CartResult from '../components/CartResult'
import {actChangeMessage, actDeleteProductInCart} from '../actions'

class CartContainer extends Component {

    showCartItem = carts => {
        let result = Message.MSG_CARTS_EMPTY;
        let { onDeleteProductInCart, onChangeMessage } = this.props;
        if (carts.length) {
            result = carts.map((item, index) => {
               return <CartItem
                        key={ index }
                        item={ item }
                        index={ index }
                        onDeleteProductInCart={ onDeleteProductInCart }
                        onChangeMessage={ onChangeMessage }
               />
            });
        }
        return result;
    }

    showTotalAmount = carts => {
        let result = [];
        if (carts.length) {
            result = <CartResult carts={ carts } />
        }
        return result;
    }

    render() {

        let { carts } = this.props;

        return (
            <Carts>
                { this.showCartItem(carts) }
                { this.showTotalAmount(carts) }
            </Carts>
        );
    }

}

CartContainer.propTypes = {
    carts: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                inventory: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired
            }).isRequired,
            quantity: PropTypes.number.isRequired
        })
    ).isRequired
}

const mapStateToProps = state => {
    return {
        carts: state.carts
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart: product => {
            dispatch(actDeleteProductInCart(product));
        },
        onChangeMessage: message => {
            dispatch(actChangeMessage(message));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
