import React, {Component} from 'react';
import * as Mesage from '../constants/Message'

class CartItem extends Component {

    showSubTotal = (quantity, price) => {
        return (quantity * price).toLocaleString('en-IN');
    }

    onDelete = product => {
        let { onDeleteProductInCart, onChangeMessage } = this.props;
        if (product) {
            onDeleteProductInCart(product);
            onChangeMessage(Mesage.MSG_DELETE_PRODUCT_IN_CARTS_SUCCESS);
        }
    }

    onUpdateQuantity = (product, quantity) => {
        let { onUpdateProductInCart, onChangeMessage } = this.props;
        if (quantity) {
            onUpdateProductInCart(product, quantity);
            onChangeMessage(Mesage.MSG_UPDATE_CART_SUCCESS);
        }
    }

    render() {

        let { item } = this.props,
            { quantity } = item;
        return (
            <tr>
                <th scope="row">
                    <img src={ item.product.image } alt={ item.product.name } className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{ item.product.name }</strong>
                    </h5>
                </td>
                <td>{ item.product.price.toLocaleString() }$</td>
                <td className="center-on-small-only">
                    <span className="qty">{ quantity } </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                            onClick={ () => this.onUpdateQuantity(item.product, item.quantity - 1) }
                        >
                            <a>—</a>
                        </label>
                        <label
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                            onClick={ () => this.onUpdateQuantity(item.product, item.quantity + 1) }
                        >
                            <a>+</a>
                        </label>
                    </div>
                </td>
                <td>{ this.showSubTotal(item.quantity, item.product.price) }$</td>
                <td>
                    <button
                        type="button"
                        className="btn btn-sm btn-primary waves-effect waves-light"
                        data-toggle="tooltip"
                        data-placement="top"
                        data-original-title="Remove item"
                        onClick={ () => this.onDelete(item.product) }
                    >
                        X
                    </button>
                </td>
            </tr>
        );
    }
}

export default CartItem;