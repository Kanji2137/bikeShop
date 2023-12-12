import React from "react";
import { Link } from "react-router-dom";


function Summary({ sum, products }) {
    return (
        <aside className="summary-box">
            <dl className="summary-values">
                <dt>Products total price:</dt>
                <dd>
                    <span>{sum}</span> POUNDS
                </dd>
                <dt className="summary-value__total">Order total:</dt>
                <dd>
                    <span>{sum}</span> POUNDS
                </dd>
                <dt className="summary-value__delivery">Delivery:</dt>
            </dl>
            <div className="summary-advance">
                <Link
                    to="/cart/payment"
                    className="summary__button summary__button__has-icon"
                    type="submit"
                    name="orders_submit"
                    state={products}
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
                    <span>Proceed to checkout</span>
                </Link>
            </div>
        </aside>
    );
}

export default Summary;