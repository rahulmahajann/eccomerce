import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Header(){

    return(
        <div className='header'>
            <img 
                className="header__logo"
                src="http://pngimg.com/uploads/amazon/small/amazon_PNG11.png" 
            />
            

            <div className='header__search'>
                <input  
                    className='header__searchInput'
                    type='text'
                />    
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className='header__nav'>

                <div className='header__option'>
                    
                    <div className='header__optionLineOne'>
                        Hello Air1
                    </div>


                    <div className='header__optionLineTwo'>
                        Accounts & Lists
                    </div>

                </div>
                
                <div className='header__option'>
                    
                    <div className="header__optionLineOne">
                        Return
                    </div>
                    
                    <div className="header__optionLineTwo">
                        & Orders
                    </div>

                </div>
                
                <div className='header__optionBasket'>

                    <ShoppingCartIcon />

                    <span
                        className='header__optionLineTwo header__basketCount'
                    >
                        9
                    </span>

                </div>

            </div>

        </div>

    )
}