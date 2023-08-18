import React from "react";
import Modal from "../../../Components/Modal/Modal";

function ContactContent({handleClose}) {
    return (
        <Modal onClose={handleClose}>
            <div className="contact__container">
                <div className="contact__header">
                    <h3>Office</h3>
                </div>
                <div className="contact__informations">
                    <p>
                        ADDRESS:
                        <br />
                        54 DRUID ST, LONDON SE1 2EZ
                    </p>
                    <a href="/">INFO@EMAIL.PL</a>
                    <p className="num">666 666 666</p>
                </div>
            </div>
        </Modal>
    );
}

export default ContactContent;
