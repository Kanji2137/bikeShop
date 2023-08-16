import React from "react";

function Select({array, func, text, ariaLabel}) {
    return (
        <div className="select">
            <select
                onChange={(e) => func(e.target.value)}
                className="custom-select"
                aria-label={ariaLabel}
            >
                <option value="">Filter by {text}</option>
                {array.map((item) => (
                    <option key={item} value={item}>Filter by {item}</option>
                ))}
            </select>
            <span className="focus"></span>
        </div>
    );
}

export default Select;
