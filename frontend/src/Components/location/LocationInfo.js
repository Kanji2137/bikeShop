import React, { useState } from "react";
import data from "../../data/data.json";

import bicycle4k from "../../images/bicycle.jpg";
import bicycleMedium from "../../images/bicycle-medium.jpg";
import bicycleSmall from "../../images/bicycle-small.jpg";
import bicycleVerySmall from "../../images/bicycle-very-small.jpg";

import ModalContent from "./OpeningHours/OpeningHours";

function LocationInfo() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = (event) => {
        event.preventDefault();
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const dataAU = data.locationInfo;
    return (
        <>
            {showModal && <ModalContent handleClose={handleClose} />}
            <div className="locationInfo__location">
                <picture>
                    <source
                        media="(min-width: 2200px)"
                        srcSet={bicycle4k}
                    />
                    <source
                        media="(min-width: 1200px)"
                        srcSet={bicycleMedium}
                    />
                    <source
                        media="(min-width: 600px)"
                        srcSet={bicycleSmall}
                    />
                    <source
                        media="(min-width: 0)"
                        srcSet={bicycleVerySmall}
                    />
                    <img
                        srcSet={bicycleMedium}
                        alt="bicycle"
                        className="locationInfo__image"
                    />
                </picture>
                <div className="locationInfo__location--information">
                    <h1 className="locationInfo-h locationInfo-h--title">
                        London - St Saviours
                    </h1>
                    <div className="locationInfo__information--description locationInfo-h">
                        <h3>
                            Address:
                            <br />
                            <strong>54 Druid St, London SE1 2EZ</strong>
                        </h3>
                        <h3>
                            E-mail:
                            <br />
                            <strong>info@email.pl</strong>
                        </h3>
                        <a
                            className="locationInfo-h"
                            onClick={handleClick}
                            href="/"
                        >
                            Check opening hours
                        </a>
                        <h3>
                            Phone number:
                            <br />
                            <strong>666 666 666</strong>
                        </h3>
                    </div>
                </div>
                <p dangerouslySetInnerHTML={{ __html: dataAU.description }} />
                <div className="locationInfo__location--map">
                    <iframe
                        title="Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d310.4611870961395!2d-0.07649136594006345!3d51.50056525841938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603441f40404b%3A0x8aa67f97392df7ae!2sHolding%20Area%20Crossrail!5e0!3m2!1sen!2spl!4v1690014870288!5m2!1sen!2spl"
                        width="600"
                        height="450"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </>
    );
}

export default LocationInfo;
