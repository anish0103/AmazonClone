import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className='navigation'>
            <ul>
                <li><Link>All</Link></li>
                <li><Link>Mobile</Link></li>
                <li><Link>Best Seller</Link></li>
                <li><Link>Electronics</Link></li>
                <li><Link>Customer Services</Link></li>
                <li><Link>Fashion</Link></li>
                <li><Link>Prime</Link></li>
                <li><Link>Home & Kitchen</Link></li>
                <li><Link>Today's Deals</Link></li>
                <li><Link>Amazon Pay</Link></li>
                <li><Link>Computer</Link></li>
                <li><Link>Books</Link></li>
            </ul>
        </div>
    )
}

export default Navbar
