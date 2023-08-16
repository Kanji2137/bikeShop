import React from "react";

function Form() {
    return (
        <div className="Form">
            <h1>Zamówienie</h1>
            <h3>Dane płatności</h3>
            <div>
                <p
                    id="billing_first_name_field"
                    data-priority="10"
                >
                    <label htmlFor="billing_first_name" className="Form__title">
                        Imię&nbsp;
                        <abbr title="wymagane">
                            *
                        </abbr>
                    </label>
                    <span>
                        <input
                            type="text"
                            className="Form__input"
                            name="billing_first_name"
                            id="billing_first_name"
                            placeholder=""
                            autoComplete="given-name"
                        />
                    </span>
                </p>
                <p
                    id="billing_last_name_field"
                    data-priority="20"
                >
                    <label htmlFor="billing_last_name" className="Form__title">
                        Nazwisko&nbsp;
                        <abbr title="wymagane">
                            *
                        </abbr>
                    </label>
                    <span>
                        <input
                            type="text"
                            className="Form__input"
                            name="billing_last_name"
                            id="billing_last_name"
                            placeholder=""
                            defaultValue=""
                            autoComplete="family-name"
                        />
                    </span>
                </p>
                <p
                    id="billing_company_field"
                    data-priority="30"
                >
                    <label htmlFor="billing_company" className="Form__title">
                        Nazwa firmy&nbsp;
                        <span>(opcjonalne)</span>
                    </label>
                    <span>
                        <input
                            type="text"
                            className="Form__input"
                            name="billing_company"
                            id="billing_company"
                            placeholder=""
                            defaultValue=""
                            autoComplete="organization"
                        />
                    </span>
                </p>
                <p
                    id="billing_address_1_field"
                    data-priority="50"
                >
                    <label htmlFor="billing_address_1" className="Form__title">
                        Ulica&nbsp;
                        <abbr title="wymagane">
                            *
                        </abbr>
                    </label>
                    <span>
                        <input
                            type="text"
                            className="Form__input"
                            name="billing_address_1"
                            id="billing_address_1"
                            placeholder="Nazwa ulicy, numer budynku / numer lokalu"
                            defaultValue=""
                            autoComplete="address-line1"
                            data-placeholder="Nazwa ulicy, numer budynku / numer lokalu"
                        />
                    </span>
                </p>
                <p
                    id="billing_address_2_field"
                    data-priority="60"
                >
                    <label htmlFor="billing_address_2" className="Form__title">
                        Nr mieszkania, lokalu, itp.&nbsp;
                        <span>(opcjonalne)</span>
                    </label>
                    <span>
                        <input
                            type="text"
                            className="Form__input"
                            name="billing_address_2"
                            id="billing_address_2"
                            placeholder="Ciąg dalszy adresu (opcjonalnie)"
                            defaultValue=""
                            autoComplete="address-line2"
                            data-placeholder="Ciąg dalszy adresu (opcjonalnie)"
                        />
                    </span>
                </p>
                <p
                    id="billing_postcode_field"
                    data-priority="65"
                    data-o_classname="form-row form-row-wide address-field validate-required validate-postcode"
                >
                    <label htmlFor="billing_postcode" className="Form__title">
                        Kod pocztowy&nbsp;
                        <abbr title="wymagane">
                            *
                        </abbr>
                    </label>
                    <span>
                        <input
                            type="text"
                            className="Form__input"
                            name="billing_postcode"
                            id="billing_postcode"
                            placeholder=""
                            defaultValue=""
                            autoComplete="postal-code"
                        />
                    </span>
                </p>
                <p
                    id="billing_city_field"
                    data-priority="70"
                >
                    <label htmlFor="billing_city" className="Form__title">
                        Miasto&nbsp;
                        <abbr title="wymagane">
                            *
                        </abbr>
                    </label>
                    <span>
                        <input
                            type="text"
                            className="Form__input"
                            name="billing_city"
                            id="billing_city"
                            placeholder=""
                            value="London"
                            autoComplete="address-level2"
                            readOnly
                        />
                    </span>
                </p>
                <p
                    id="billing_state_field"
                    style={{ display: "none" }}
                >
                    <label htmlFor="billing_state" className="Form__title">
                        Województwo / Region&nbsp;
                        <span>(opcjonalne)</span>
                    </label>
                    <span>
                        <input
                            type="hidden"
                            id="billing_state"
                            name="billing_state"
                            placeholder=""
                        />
                    </span>
                </p>
                <p
                    id="billing_phone_field"
                    data-priority="100"
                >
                    <label htmlFor="billing_phone" className="Form__title">
                        Numer telefonu&nbsp;
                        <abbr title="wymagane">
                            *
                        </abbr>
                    </label>
                    <span>
                        <input
                            type="tel"
                            className="Form__input"
                            name="billing_phone"
                            id="billing_phone"
                            placeholder=""
                            defaultValue=""
                            autoComplete="tel"
                        />
                    </span>
                </p>
                <p
                    id="billing_email_field"
                    data-priority="110"
                >
                    <label htmlFor="billing_email" className="Form__title">
                        Adres e-mail&nbsp;
                        <abbr title="wymagane">
                            *
                        </abbr>
                    </label>
                    <span>
                        <input
                            type="email"
                            className="Form__input"
                            name="billing_email"
                            id="billing_email"
                            placeholder=""
                            defaultValue=""
                            autoComplete="email username"
                        />
                    </span>
                </p>
            </div>
        </div>
    );
}

export default Form;