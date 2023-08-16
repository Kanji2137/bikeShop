import React from "react";
import { BiArrowBack } from 'react-icons/bi';
import {
    useNavigate,
  } from 'react-router-dom';

function Backwards () {
    const navigate = useNavigate();

    return (
        <div className="backwards" onClick={() => navigate(-1)}>
            <BiArrowBack className="icon"/>
            <h1>back</h1>
        </div>
    );
}

export default Backwards;