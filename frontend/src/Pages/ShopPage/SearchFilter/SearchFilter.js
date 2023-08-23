import { useState, useEffect } from "react";

import Card from "../../../Components/card/Card";
import Select from "./select/Select";

function SearchFilter() {
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(true);
    const [items, setItems] = useState([]);
    const [query, setQuery] = useState("");
    const [filter, setFilter] = useState("");
    const [priceFilter, setPriceFilter] = useState("");
    const [paginate, setPaginate] = useState(8);

    useEffect(() => {
        fetch(
            "https://bike-hub-api.onrender.com/products"
        )
            .then((res) => res.json())
            .then(
                (result) => {
                    setLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setLoaded(true);
                    setError(error);
                }
            );
    }, []);

    const data = Object.values(items);

    const search_parameters = Object.keys(Object.assign({}, ...data));
    const filter_items = [...new Set(data.map((item) => item.brand))];
    const filter_prices = ["to lower", "to higher"];

    function search(items) {
        const filteredItems = items.filter(
            (item) =>
                item.brand.includes(filter) &&
                search_parameters.some((parameter) => item[parameter].toString().toLowerCase().includes(query.toLowerCase())
            )
        );
        return filteredItems.sort((a, b) => {
            if(priceFilter === "to lower"){
                return b['price'] - a['price'];
            } else if(priceFilter === "to higher"){
                return  a['price'] - b['price'];
            } else return 1;
        })
    }

    const loadMore = (_event) => {
        setPaginate((prevValue) => prevValue + 8);
    };

    if (error) {
        return <>{error.message}</>;
    } else if (!loaded) {
        return <>loading...</>;
    } else {
        return (
            <div className="wrapper">
                <div className="search-wrapper">
                    <label htmlFor="search-form">
                        <input
                            type="search"
                            name="search-form"
                            id="search-form"
                            className="search-input"
                            placeholder="Search for..."
                            onChange={(e) => setQuery(e.target.value)}
                        />
                    </label>
                    <Select array={filter_items} func={setFilter} text="brand" ariaLabel="Filter bikes by brand"/>
                    <Select array={filter_prices} func={setPriceFilter} text="price" ariaLabel="Filter bikes by price"/>
                </div>


                <ul className="card-grid">
                    {search(data)
                        .slice(0, paginate)
                        .map((item) => (
                            <li key={item.name}>
                                <Card inShop="true" className="btn-addCart" item={item}/>
                            </li>
                        ))}
                </ul>
                <button className="btn btn-loadMore" onClick={loadMore}>Load More</button>
            </div>
        );
    }
}

export default SearchFilter;