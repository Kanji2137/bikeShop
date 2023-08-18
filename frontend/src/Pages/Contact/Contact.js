import React, { useState } from "react";
import ContactContent from "./ContactContent/ContactContent";

function Contact () {
    const [showModal, setShowModal] = useState(false);

    const handleClick = (event) => {
        event.preventDefault();
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };
    return (
        <>
            <a onClick={handleClick} href="/">Contact</a>
            {showModal && <ContactContent handleClose={handleClose} />}
        </>
    );
}

export default Contact;