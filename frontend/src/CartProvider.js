import "./App.css";
import {useState, useEffect} from "react";
import {Outlet} from "react-router-dom";

function CartProvider() {
    const [carts, setCart] = useState([]);

    useEffect(() => {
        if (carts.length !== 0) {
            localStorage.setItem('carts', JSON.stringify(carts));
        }
    }, [carts]);

    useEffect(() => {
        const savedCount = localStorage.getItem('carts');
        if (savedCount) {
            setCart(JSON.parse(savedCount));
        }
    }, []);


    const deleteProduct = (item) => {
        setCart(carts.filter((product) => product.name !== item.name));
    };

    const addProduct = (item) => {
        let obj = carts.find(cart => cart.name === item.name);
        if (obj === undefined) setCart([...carts, item]);
    };

    return <Outlet context={{carts, addProduct, deleteProduct}}/>;
}

export default CartProvider;