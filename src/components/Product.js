import React from 'react';
import './Product.css';
import StarIcon from '@mui/icons-material/Star';

function Product(props){
    return(
        <div className='product'>

            <div className='product__info'>
                
                {props.productName}

                <p className='product__price'>

                    <small>Rs.</small>
                    <strong>{props.amount}</strong>

                </p>

                <div className='product__rating'>
                    {Array(props.rating)
                        .fill()
                        .map((ind, i) => (
                            <p>
                                <StarIcon />
                            </p>
                        ))
                    }
                </div>

            </div>

            <img 
                className='product__image'
                src={props.source}
            />

            <button 
                className='product__AddToCard'
            >
                Add To Basket
            </button>

        </div>
    )
}

export default Product;