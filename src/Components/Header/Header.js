import React from 'react'
import "./Header.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <Link to="/">
                <img
                    className="header__logo"
                    src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="" />
            </Link>

            <div className="header__delivery">
                <div className="header__deliveryLogo">
                    <LocationOnIcon />
                </div>
                <div className="header__deliveryText">
                    <div className="header__deliveryTextName">
                        <h6>Hello</h6>
                    </div>

                    <div className="header__deliveryTextLocation">
                        <h5>Select Your Address</h5>
                    </div>
                </div>
            </div>


            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link to="/login">
                    <div className="header__option">
                        <span className="header__optionLineOne">
                            Hello , SignIn
                        </span>
                        <span className="header__optionLineTwo">
                            Accounts & Links
                        </span>
                    </div>

                </Link>
                <Link to="/orders">
                    <div className="header__option">
                        <span className="header__optionLineOne">
                            Returns
                        </span>
                        <span className="header__optionLineTwo">
                            & Orders
                        </span>
                    </div>
                </Link>


                <div className="header__option">
                    <span className="header__optionLineOne">
                        Your
                    </span>
                    <span className="header__optionLineTwo">
                        Prime
                    </span>
                </div>
                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingCartIcon />
                        <span className="header__optionLineTwo header__basketCount">0</span>
                    </div>
                </Link>


            </div>
        </div>
    )
}

export default Header;
