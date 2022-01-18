import React from 'react';
import './Subtotal.css';

import CurrencyFormat from 'react-currency-format';

export default function Subtotal(){
    return(

        <div className='subtotal'>
            <CurrencyFormat 
                renderText={
                    (value) => (
                        <>
                            <p>
                                SubTotal(0 products): 
                                <strong>0</strong> 
                            </p>

                            <small className='subtotal__gift'>
                                <input 
                                    type='checkbox'
                                />
                                This order contains a gift item
                            </small>
                        </>
                    )
                }

                decimalScale = {2}
                value = {0}
                displayType = {"text"}
                thousandSeparator = {true}
                prefix={'$'}
            />
            <button>procced to pay</button>
        </div>

    )  
}
    