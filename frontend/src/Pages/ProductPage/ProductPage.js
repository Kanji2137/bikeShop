import React from "react";
import { useLocation } from "react-router-dom";
import Backwards from "../../Components/backwards/backwards";
import { useOutletContext } from "react-router-dom";

function ProductPage() {
    let { state } = useLocation();
    const item = state.item;
    const inShop = state.inShop;
    const { addProduct } = useOutletContext();

    const btn = <div className="summary-advance">
                <button
                    className="summary__button summary__button__has-icon"
                    onClick={() => addProduct(item)}
                >
                    <div className="summary__button-icon-wrapper">
                        <svg
                            className="summary__button-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M23 4 4.7 3.2 3.9 0H0v1h3.1l4 16H19v-1H7.9l-.8-3.1 13.8-2L23 4zM6.9 11.9 5 4.3l16.9.8-1.7 5-13.3 1.8zM6.5 18C5.1 18 4 19.1 4 20.5S5.1 23 6.5 23 9 21.9 9 20.5 7.9 18 6.5 18zm0 4c-.8 0-1.5-.7-1.5-1.5S5.7 19 6.5 19s1.5.7 1.5 1.5S7.3 22 6.5 22zm10-4c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5zm0 4c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"></path>
                        </svg>
                    </div>
                    <span>Add to cart</span>
                </button>
            </div>;

    return (
        <section className="wrapper section">
            <Backwards />
            <div className="wrapper-inner ProductPage__wrapper">
                <img
                    className="ProductPage__image"
                    src={item?.image_link}
                    alt={item?.name}
                />
                <div className="ProductPage__text">
                    <h1>
                        <div>{item?.brand}</div>
                        <div>{item?.name}</div>
                    </h1>
                    <h2>
                        <div>price: {item?.price}</div>
                        <div>color: {item?.color}</div>
                    </h2>
                    {inShop ? (
                        btn
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </section>
    );
}

export default ProductPage;
