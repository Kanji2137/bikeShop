import React from "react";
import { useLocation } from 'react-router-dom';
import Backwards from '../../../Components/backwards/backwards'
import { useOutletContext } from "react-router-dom";


function ProductPage() {
    let { state } = useLocation();
    const item = state.item;
    const inShop = state.inShop;
    const { addProduct } = useOutletContext();

    return (
            <section className="wrapper section">
                <Backwards/>
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
                        {
                            inShop ? <button className="btn btn-addCart" onClick={() => addProduct(item)}>Add to cart</button> : <></>
                        }
                    </div>
                </div>
            </section>
    );
}

export default ProductPage;