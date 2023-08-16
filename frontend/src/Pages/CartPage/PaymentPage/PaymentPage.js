import React from "react";
import Form from "./Form/Form";
import SmallSummary from "./SmallSummary/SmallSummary"
import Payment from "./Payment/Payment";

import { useLocation } from 'react-router-dom';


function PaymentPage() {
    const location = useLocation();
    const products = location.state;
    return (
        <section className="wrapper PaymentPage">
            <div className="wrapper-inner">
                <form>
                    <Form/>
                    <h1>Twoje zamówienie</h1>
                    <SmallSummary products={products}/>
                    <Payment/>
                </form>
            </div>
        </section>
    );
}

export default PaymentPage;
