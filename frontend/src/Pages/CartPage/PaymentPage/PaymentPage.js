import React from "react";
import { useLocation } from 'react-router-dom';

import Form from "./Form/Form";
import SmallSummary from "./SmallSummary/SmallSummary"
import Payment from "./Payment/Payment";
import Backwards from "../../../Components/backwards/backwards";



function PaymentPage() {
    const location = useLocation();
    const products = location.state;
    return (
        <section className="wrapper PaymentPage">
            <Backwards/>
            <div className="wrapper-inner">
                <form>
                    <Form/>
                    <h1>Your order</h1>
                    <SmallSummary products={products}/>
                    <Payment/>
                </form>
            </div>
        </section>
    );
}

export default PaymentPage;
