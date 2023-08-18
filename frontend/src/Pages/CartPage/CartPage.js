import React from "react";
import { useOutletContext } from "react-router-dom";
import Card from "../../Components/card/Card";
import Summary from "./Summary/Summary";
import Backwards from "../../Components/backwards/backwards";


function CartPage() {
    const { carts, deleteProduct } = useOutletContext();

    let sum = carts.map((item) => item.price)
    sum = sum.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    sum = Math.round(sum * 100) / 100
    return (
        <div className="wrapper">
            <Backwards/>
            <div className="CartPage--innerWrapper">
                <div className="CartPage--cardsWrapper">
                    <ul className="card-grid">
                        {carts.map((item) => (
                            <li key={item.name}>
                                <Card item={item} func={deleteProduct} text="Delete" className="btn-delete"/>
                            </li>
                        ))}
                    </ul>
                </div>
                <Summary sum={sum} products={carts}/>
            </div>
        </div>
    );
}

export default CartPage;