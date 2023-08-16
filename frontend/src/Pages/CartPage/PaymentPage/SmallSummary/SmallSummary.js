import React from "react";

function SmallSummary({ products }) {
    let sum = products.map((item) => item.price);
    sum = sum.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
    );
    sum = Math.round(sum * 100) / 100;
    return (
        <div className="smallSummary__container">
            <ul className="smallSummary__responsive-table">
                <li className="table-header">
                    <div className="col col-1">Product</div>
                    <div className="col col-2">Price</div>
                </li>
                {products.map((product) => {
                    return (
                        <li className="table-row" key={product.name}>
                            <div className="col col-1" data-label="Product">
                                {product.name}&nbsp;&nbsp;{" "}
                            </div>
                            <div className="col col-2" data-label="Price">
                                {product.price}{" "}&nbsp;&nbsp;
                                Pounds
                            </div>
                        </li>
                    );
                })}
            </ul>
            <h2 className="smallSummary__subtotal">
                <div>
                    Subtotal  {sum}{" "}
                </div>
                <div>
                    POUNDS
                </div>
            </h2>
        </div>
    );
}

export default SmallSummary;