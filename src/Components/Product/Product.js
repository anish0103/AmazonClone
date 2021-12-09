import React from 'react';
import './Product.css';

const Product = (Probs) => {
    return (
        <div className="product__main">
            <img src={Probs.src}/>
            <p>{Probs.description}</p>
        </div>
    )
}

export default Product;
