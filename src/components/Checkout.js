import React from 'react';
import './Checkout.css';

import Subtotal from './Subtotal'

export default function Checkout(){
    return(
        <div className = 'checkout'>
            
            <div className='checkout__left'>

                <img
                    className='checkout__banner'
                    src = 'https://images-eu.ssl-images-amazon.com/images/G/31/consumer_electronics/sajjadp/new_launches_elec_final/xcm_banners_-e-1640169369922_1500x150_in-en.jpg'
                />

                <div className='checkout__title'>
                    <h2>Basket Products</h2>
                </div>

            </div>
            
            <div className='checkout__right'>
                
                <Subtotal />
                
            </div>

        </div>
    )
}