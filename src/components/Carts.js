import React, {Component} from 'react';
import CartItem from './CartItem';
import CartResult from './CartResult';

class Carts extends Component {
    render() {
        return (
            <section className="section">
                <div className="table-responsive">
                    <table className="table product-table">
                        <thead>
                        <tr>
                            <th />
                            <th>Sản Phẩm</th>
                            <th>Giá</th>
                            <th>Số Lượng</th>
                            <th>Tổng Cộng</th>
                            <th />
                        </tr>
                        </thead>
                        <tbody>
                        <CartItem />
                        <CartItem />
                        <CartItem />

                        {/* Cart Result */}
                        <CartResult />
                        </tbody>
                    </table>
                </div>
            </section>
        );
    }
}

export default Carts;
