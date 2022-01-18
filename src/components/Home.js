import React from 'react';
import './Home.css';
import Product from './Product.js';
function Home() {
    return (
        <div className='home'>

            <div className='home__container'>

                <img className="home__banner"                        
                    src='https://m.media-amazon.com/images/I/71Rcre1g8IL._SX3000_.jpg'
                />

                <div className='home__row'>
                    <Product
                        productName = "Mi Mobile Phone"
                        amount = '10000/-'
                        source = 'https://images-eu.ssl-images-amazon.com/images/I/41tbmj1WoyL._SX300_SY300_QL70_FMwebp_.jpg'
                        rating = {4}
                    />
                    <Product
                        productName = "CorsAir HeadPhone"
                        amount = '14000/-'
                        source = 'https://m.media-amazon.com/images/I/61nnZlMLDpL._AC_UY218_.jpg'
                        rating = {5}
                    />
                </div>

                <div className="home__row">
                    <Product
                            productName = "Sony Bravia"
                            amount = '75000/-'
                            source = 'https://m.media-amazon.com/images/I/81lpllAGcBL._AC_UY218_.jpg'
                            rating = {4}
                    />
                    <Product
                        productName = "Mi Mobile Phone"
                        amount = '10000/-'
                        source = 'https://images-eu.ssl-images-amazon.com/images/I/41tbmj1WoyL._SX300_SY300_QL70_FMwebp_.jpg'
                        rating = {4}
                    />
                    <Product
                            productName = "Mi Mobile Phone"
                            amount = '10000/-'
                            source = 'https://images-eu.ssl-images-amazon.com/images/I/41tbmj1WoyL._SX300_SY300_QL70_FMwebp_.jpg'
                            rating = {4}
                    />
                </div>

                <div className="home__row">
                    <Product
                        productName = "Mi Mobile Phone"
                        amount = '10000/-'
                        source = 'https://images-eu.ssl-images-amazon.com/images/I/41tbmj1WoyL._SX300_SY300_QL70_FMwebp_.jpg'
                        rating = {4}
                    />
                </div>

            </div>

        </div>
    );
}

export default Home;