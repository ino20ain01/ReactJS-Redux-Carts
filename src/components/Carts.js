import React, {Component} from 'react';

class Carts extends Component {
    render() {

        let { children } = this.props;
        if (typeof children[0] === 'string') {
            children = (
                <tr>
                    <td colSpan="6" style={{ textAlign: 'center', }}>{ children }</td>
                </tr>
            );
        }
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
                        {/*{ children }*/}
                        { children }
                        {/* Cart Result */}
                        </tbody>
                    </table>
                </div>
            </section>
        );
    }
}

export default Carts;
