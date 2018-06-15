import React, {Component} from 'react';
import Header from './components/Header';
import ProductsContainer from './containers/ProductsContainer';
import Message from './components/Message';
import Carts from './components/Carts';
import Footer from './components/Footer';

class App extends Component {
    render() {
        return (
            <div>
                {/* Header */}
                <Header />
                <main id="mainContainer">
                    <div className="container">
                        {/* Products */}
                        <ProductsContainer />
                        {/* Message */}
                        <Message />
                        {/* Cart */}
                        <Carts />
                    </div>
                </main>
                {/* Footer */}
                <Footer />
            </div>
        );
    }
}

export default App;
