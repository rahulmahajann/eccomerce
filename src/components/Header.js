import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

const inbuilt__link = {
    margin: "1rem",
  textDecoration: "none",
  color: 'blue'
}

export default function Header(){

    return(
        <div className='header'>
            <Link to='/' className='inbuilt__link'>
                <img 
                    className="header__logo"
                    src="http://pngimg.com/uploads/amazon/small/amazon_PNG11.png" 
                />
            </Link>
            
            

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

                    <Link to='/checkout' className='inbuilt__link'>
                        <ShoppingCartIcon />
                    </Link>

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