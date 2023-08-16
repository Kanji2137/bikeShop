import React from 'react';
import OptionCard from './OptionCard/OptionCard';
import LocationInfo from '../../Components/location/LocationInfo';
import data from "../../data/data.json";

function ServicePage () {
    const dataCards = data.serviceCards;
    return (
        <section className="section ServicePage">
            <div className="wrapper">
                <h1>Choose a bike service to suit.</h1>
                <h2>The best bang for your buck. Here's a breakdown of what’s covered....</h2>
                <div className="ServicePage__CardsContainer">
                    {
                        dataCards.map((card, index) => {
                            return (
                                <OptionCard key={card.title} data={card} index={index}/>
                            );
                        })
                    }
                </div>
            </div>
            <LocationInfo/>
        </section>
    );
}

export default ServicePage;