import React from "react";

function OptionCard({data, index}) {
    return (
        <div className="optionCard">
            <h3 className="content-header">{data.title}</h3>
            <div className="sub-header">{data.sub_title}</div>
            <p className="description-text">
                {data.description}
            </p>
            <div className="pricing-header">{data.pricing_header}</div>
            <div className="pricing-subtext">{data.pricing_subtext}</div>
            <div className="pricing-featured-wrapper">
                <div className="pricing-features">
                    <div className="features-accordion-content">
                        <div className="package-list-wrapper">
                            <ul className="packagelist">
                                {
                                    data.package_list.map((element, index) => {
                                        return (
                                            <li key={index}>
                                                <div dangerouslySetInnerHTML={{ __html: element }}/>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {index === 1 ? <div className="most-popular"><div>Most Popular</div></div> : <></>}
        </div>
    );
}

export default OptionCard;
