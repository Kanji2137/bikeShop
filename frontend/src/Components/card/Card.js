import React from "react";
import { Link } from "react-router-dom";

function Card({item, func, text, className, inShop}) {
    className += ' btn';
    return (
        <article className="card">
            <div className="card-image">
                <img src={item?.image_link} alt={item?.name} />
            </div>
            <div className="card-content">
                <h2 className="card-name">{item?.name}</h2>
                <ol className="card-list">
                    <li>
                        Color: <span>{item?.color}</span>
                    </li>
                    <li>
                        Brand: <span>{item?.brand}</span>
                    </li>
                    <li>
                        Price: <span>{item?.price}</span>
                    </li>
                </ol>
            </div>
            <Link className="card-details" to="/cart/pruduct" state={{ item, inShop }}>
                <button className="btn-details btn">Details</button>
            </Link>
            <button className={className} onClick={() => func(item)}>{text}</button>
        </article>
    );
}

export default Card;
