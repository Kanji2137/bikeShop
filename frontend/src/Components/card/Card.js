import React from "react";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from 'react-icons/ri';


function Card({ item, func, text, className, inShop }) {
    className += " btn";
    return (
        <div>
            <Link
                className="card-details"
                to="/cart/pruduct"
                state={{ item, inShop }}
            >
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
                </article>
            </Link>
            {func === undefined ? (
                <></>
            ) : (
                <>
                    <button className={className} onClick={() => func(item)}>
                        <RiDeleteBin6Line className="icon"/>
                        {text}
                    </button>
                </>
                
            )}
        </div>
    );
}

export default Card;
