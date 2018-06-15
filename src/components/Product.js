import React, {Component} from 'react';

class Product extends Component {

    showRatings = rating => {
        let result = [];
        if (rating && rating <= 5) {
            for (let i = 1; i <= 5; i++) {
                if (i <= rating) {
                    result.push(<i key={ i } className="fa fa-star"/>);
                } else {
                    result.push(<i key={ i } className="fa fa-star-o"/>);
                }
            }
        }
        return result;
    }

    onAddToCart = product => {
        this.props.onAddToCart(product);
    }

    render() {

        let { product } = this.props;

        return (
            <div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img className="img-fluid" src={ product.image } alt={ product.name } />
                        <a>
                            <div className="mask waves-light waves-effect waves-light" />
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a>{ product.name }</a>
                            </strong>
                        </h4>
                        <ul className="rating">
                            <li>
                            { this.showRatings(product.rating) }
                            </li>
                        </ul>
                        <p className="card-text">
                            { product.description }
                        </p>
                        <div className="card-footer">
                            <span className="left">{ product.price.toLocaleString('en-IN') }$</span>
                            <span className="right">
                                <a className="btn-floating blue-gradient"
                                   data-toggle="tooltip"
                                   data-placement="top"
                                   data-original-title="Add to Cart"
                                   onClick={ () => { this.onAddToCart(product) } }
                                >
                                  <i className="fa fa-shopping-cart" />
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;
