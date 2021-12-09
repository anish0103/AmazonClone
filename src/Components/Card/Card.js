import React from 'react'
import './Card.css';

const Card = (Probs) => {
    return (
        <div className="card__main">
            <div className="card__title">
                <h3>{Probs.title}</h3>
            </div>
            <div className="card__content">
                {Probs.children}
            </div>
            <div className="card__link">
                <p>See more</p>
            </div>
        </div>
    )
}

export default Card;
