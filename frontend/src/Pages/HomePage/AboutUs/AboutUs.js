import React from "react";
import LocationInfo from "../../../Components/location/LocationInfo.js";

import { IoIosSpeedometer } from "react-icons/io";
import { GrCertificate } from "react-icons/gr";
import { FiPackage } from "react-icons/fi";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { TbArrowsLeftRight } from "react-icons/tb";

function AboutUs() {
    const icons = [
        {
            id: 1,
            text: "fast",
            icon: IoIosSpeedometer,
        },
        {
            id: 2,
            text: "guarantee of quality",
            icon: GrCertificate,
        },
        {
            id: 3,
            text: "home delivery",
            icon: FiPackage,
        },
        {
            id: 4,
            text: "complaint policy",
            icon: AiOutlineSafetyCertificate,
        },
        {
            id: 5,
            text: "returns",
            icon: TbArrowsLeftRight,
        },
    ];

    const items = icons.map((item) => {
        const IconComponent = item.icon;
        return (
            <div className="aboutUs__item" key={item.id}>
                <IconComponent className="aboutUs__icon" />
                <h2 className="aboutUs-h aboutUs-h--item">{item.text}</h2>
            </div>
        );
    });

    return (
        <section className="section aboutUs">
            <h1 className="aboutUs-h aboutUs-h--title">About Us</h1>
            <div className="aboutUs__underline" />
            <div className="aboutUs__item-container">{items}</div>
            <div className="aboutUs__underline"/>
            <LocationInfo/>
        </section>
    );
}

export default AboutUs;
