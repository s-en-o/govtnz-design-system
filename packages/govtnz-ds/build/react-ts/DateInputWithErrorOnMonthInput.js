"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var constants = {
    type: {
        Button: "button",
        Checkbox: "checkbox",
        Color: "color",
        Date: "date",
        "DateTime: Local": "datetime-local",
        Email: "email",
        File: "file",
        Hidden: "hidden",
        Image: "image",
        Month: "month",
        Number: "number",
        Password: "password",
        Radio: "radio",
        Range: "range",
        Reset: "reset",
        Search: "search",
        Submit: "submit",
        Telephone: "tel",
        Text: "text",
        Time: "time",
        URL: "url",
        Week: "week"
    },
    autoComplete: {
        Off: "off",
        On: "on",
        Name: "name",
        "Honorific: Prefix": "honorific-prefix",
        "Given Name": "given-name",
        "Additional Name": "additional-name",
        "Family Name": "family-name",
        "Honorific: Suffix": "honorific-suffix",
        Nickname: "nickname",
        Email: "email",
        Username: "username",
        "New Password": "new-password",
        "Current Password": "current-password",
        "Organization Title": "organization-title",
        Organization: "organization",
        "Street Address": "street-address",
        "Address Line 1": "address-line1",
        "Address Line 2": "address-line2",
        "Address Line 3": "address-line3",
        "Address Level 4": "address-level4",
        "Address Level 3": "address-level3",
        "Address Level 2": "address-level2",
        "Address Level 1": "address-level1",
        Country: "country",
        "Country Name": "country-name",
        "Postal Code": "postal-code",
        "Credit Card: Name": "cc-name",
        "Credit Card: Given Name": "cc-given-name",
        "Credit Card: Additional Name": "cc-additional-name",
        "Credit Card: Family Name": "cc-family-name",
        "Credit Card: Number": "cc-number",
        "Credit Card: Expiry": "cc-exp",
        "Credit Card: Expiry Month": "cc-exp-month",
        "Credit Card: Expiry Year": "cc-exp-year",
        "Credit Card: CSC": "cc-csc",
        "Credit Card: Type": "cc-type",
        "Transaction: Currency": "transaction-currency",
        "Transaction: Amount": "transaction-amount",
        Language: "language",
        Birthday: "bday",
        "Birthday: Day": "bday-day",
        "Birthday: Month": "bday-month",
        "Birthday: Year": "bday-year",
        Sex: "sex",
        Telephone: "tel",
        "Telephone: Country Code": "tel-country-code",
        "Telephone: National": "tel-national",
        "Telephone: Area Code": "tel-area-code",
        "Telephone: Local": "tel-local",
        "Telephone: Extension": "tel-extension",
        IMPP: "impp",
        URL: "url",
        Photo: "photo"
    },
    type2: {
        Button: "button",
        Checkbox: "checkbox",
        Color: "color",
        Date: "date",
        "DateTime: Local": "datetime-local",
        Email: "email",
        File: "file",
        Hidden: "hidden",
        Image: "image",
        Month: "month",
        Number: "number",
        Password: "password",
        Radio: "radio",
        Range: "range",
        Reset: "reset",
        Search: "search",
        Submit: "submit",
        Telephone: "tel",
        Text: "text",
        Time: "time",
        URL: "url",
        Week: "week"
    },
    autoComplete2: {
        Off: "off",
        On: "on",
        Name: "name",
        "Honorific: Prefix": "honorific-prefix",
        "Given Name": "given-name",
        "Additional Name": "additional-name",
        "Family Name": "family-name",
        "Honorific: Suffix": "honorific-suffix",
        Nickname: "nickname",
        Email: "email",
        Username: "username",
        "New Password": "new-password",
        "Current Password": "current-password",
        "Organization Title": "organization-title",
        Organization: "organization",
        "Street Address": "street-address",
        "Address Line 1": "address-line1",
        "Address Line 2": "address-line2",
        "Address Line 3": "address-line3",
        "Address Level 4": "address-level4",
        "Address Level 3": "address-level3",
        "Address Level 2": "address-level2",
        "Address Level 1": "address-level1",
        Country: "country",
        "Country Name": "country-name",
        "Postal Code": "postal-code",
        "Credit Card: Name": "cc-name",
        "Credit Card: Given Name": "cc-given-name",
        "Credit Card: Additional Name": "cc-additional-name",
        "Credit Card: Family Name": "cc-family-name",
        "Credit Card: Number": "cc-number",
        "Credit Card: Expiry": "cc-exp",
        "Credit Card: Expiry Month": "cc-exp-month",
        "Credit Card: Expiry Year": "cc-exp-year",
        "Credit Card: CSC": "cc-csc",
        "Credit Card: Type": "cc-type",
        "Transaction: Currency": "transaction-currency",
        "Transaction: Amount": "transaction-amount",
        Language: "language",
        Birthday: "bday",
        "Birthday: Day": "bday-day",
        "Birthday: Month": "bday-month",
        "Birthday: Year": "bday-year",
        Sex: "sex",
        Telephone: "tel",
        "Telephone: Country Code": "tel-country-code",
        "Telephone: National": "tel-national",
        "Telephone: Area Code": "tel-area-code",
        "Telephone: Local": "tel-local",
        "Telephone: Extension": "tel-extension",
        IMPP: "impp",
        URL: "url",
        Photo: "photo"
    },
    type3: {
        Button: "button",
        Checkbox: "checkbox",
        Color: "color",
        Date: "date",
        "DateTime: Local": "datetime-local",
        Email: "email",
        File: "file",
        Hidden: "hidden",
        Image: "image",
        Month: "month",
        Number: "number",
        Password: "password",
        Radio: "radio",
        Range: "range",
        Reset: "reset",
        Search: "search",
        Submit: "submit",
        Telephone: "tel",
        Text: "text",
        Time: "time",
        URL: "url",
        Week: "week"
    },
    autoComplete3: {
        Off: "off",
        On: "on",
        Name: "name",
        "Honorific: Prefix": "honorific-prefix",
        "Given Name": "given-name",
        "Additional Name": "additional-name",
        "Family Name": "family-name",
        "Honorific: Suffix": "honorific-suffix",
        Nickname: "nickname",
        Email: "email",
        Username: "username",
        "New Password": "new-password",
        "Current Password": "current-password",
        "Organization Title": "organization-title",
        Organization: "organization",
        "Street Address": "street-address",
        "Address Line 1": "address-line1",
        "Address Line 2": "address-line2",
        "Address Line 3": "address-line3",
        "Address Level 4": "address-level4",
        "Address Level 3": "address-level3",
        "Address Level 2": "address-level2",
        "Address Level 1": "address-level1",
        Country: "country",
        "Country Name": "country-name",
        "Postal Code": "postal-code",
        "Credit Card: Name": "cc-name",
        "Credit Card: Given Name": "cc-given-name",
        "Credit Card: Additional Name": "cc-additional-name",
        "Credit Card: Family Name": "cc-family-name",
        "Credit Card: Number": "cc-number",
        "Credit Card: Expiry": "cc-exp",
        "Credit Card: Expiry Month": "cc-exp-month",
        "Credit Card: Expiry Year": "cc-exp-year",
        "Credit Card: CSC": "cc-csc",
        "Credit Card: Type": "cc-type",
        "Transaction: Currency": "transaction-currency",
        "Transaction: Amount": "transaction-amount",
        Language: "language",
        Birthday: "bday",
        "Birthday: Day": "bday-day",
        "Birthday: Month": "bday-month",
        "Birthday: Year": "bday-year",
        Sex: "sex",
        Telephone: "tel",
        "Telephone: Country Code": "tel-country-code",
        "Telephone: National": "tel-national",
        "Telephone: Area Code": "tel-area-code",
        "Telephone: Local": "tel-local",
        "Telephone: Extension": "tel-extension",
        IMPP: "impp",
        URL: "url",
        Photo: "photo"
    }
};
var DateInputWithErrorOnMonthInput = function (_a) {
    var dobMonthErrorHint = _a.dobMonthErrorHint, dobMonthErrorError = _a.dobMonthErrorError, dobMonthError = _a.dobMonthError, dobMonthErrorDay = _a.dobMonthErrorDay, name = _a.name, disabled = _a.disabled, readOnly = _a.readOnly, autoFocus = _a.autoFocus, value = _a.value, type = _a.type, spellCheck = _a.spellCheck, autoComplete = _a.autoComplete, onChange = _a.onChange, dobMonthErrorMonth = _a.dobMonthErrorMonth, name2 = _a.name2, disabled2 = _a.disabled2, readOnly2 = _a.readOnly2, autoFocus2 = _a.autoFocus2, value2 = _a.value2, type2 = _a.type2, spellCheck2 = _a.spellCheck2, autoComplete2 = _a.autoComplete2, onChange2 = _a.onChange2, dobMonthErrorYear = _a.dobMonthErrorYear, name3 = _a.name3, disabled3 = _a.disabled3, readOnly3 = _a.readOnly3, autoFocus3 = _a.autoFocus3, value3 = _a.value3, type3 = _a.type3, spellCheck3 = _a.spellCheck3, autoComplete3 = _a.autoComplete3, onChange3 = _a.onChange3;
    return (React.createElement("div", { className: "g-dateInputWithErrorOnMonthInput-form-group g-dateInputWithErrorOnMonthInput-form-group--error" },
        React.createElement("fieldset", { "aria-describedby": dobMonthErrorHint !== undefined || dobMonthErrorError !== undefined
                ? "" + (dobMonthErrorHint ? dobMonthErrorHint : "") + (dobMonthErrorError ? " " + dobMonthErrorError : "")
                : undefined, className: "g-dateInputWithErrorOnMonthInput-fieldset", role: "group" },
            React.createElement("legend", { className: "g-dateInputWithErrorOnMonthInput-fieldset__legend" }, "What is your date of birth?"),
            React.createElement("span", { className: "g-dateInputWithErrorOnMonthInput-hint", id: dobMonthErrorHint }, "For example, 31 3 1980"),
            React.createElement("span", { className: "g-dateInputWithErrorOnMonthInput-error-message", id: dobMonthErrorError }, "Error message goes here"),
            React.createElement("div", { className: "g-dateInputWithErrorOnMonthInput-date-input", id: dobMonthError },
                React.createElement("div", { className: "g-dateInputWithErrorOnMonthInput-date-input__item" },
                    React.createElement("div", { className: "g-dateInputWithErrorOnMonthInput-form-group" },
                        React.createElement("label", { className: "g-dateInputWithErrorOnMonthInput-label g-dateInputWithErrorOnMonthInput-date-input__label", htmlFor: dobMonthErrorDay }, "Day"),
                        React.createElement("input", { className: "g-dateInputWithErrorOnMonthInput-input g-dateInputWithErrorOnMonthInput-date-input__input g-dateInputWithErrorOnMonthInput-input--width-2", id: dobMonthErrorDay, name: name, pattern: "[0-9]*", type: constants.type[type], disabled: disabled, readOnly: readOnly, autoFocus: autoFocus, value: value, spellCheck: spellCheck, autoComplete: constants.autoComplete[autoComplete], onChange: onChange }))),
                React.createElement("div", { className: "g-dateInputWithErrorOnMonthInput-date-input__item" },
                    React.createElement("div", { className: "g-dateInputWithErrorOnMonthInput-form-group" },
                        React.createElement("label", { className: "g-dateInputWithErrorOnMonthInput-label g-dateInputWithErrorOnMonthInput-date-input__label", htmlFor: dobMonthErrorMonth }, "Month"),
                        React.createElement("input", { className: "g-dateInputWithErrorOnMonthInput-input g-dateInputWithErrorOnMonthInput-date-input__input g-dateInputWithErrorOnMonthInput-input--width-2 g-dateInputWithErrorOnMonthInput-input--error", id: dobMonthErrorMonth, name: name2, pattern: "[0-9]*", type: constants.type2[type2], disabled: disabled2, readOnly: readOnly2, autoFocus: autoFocus2, value: value2, spellCheck: spellCheck2, autoComplete: constants.autoComplete2[autoComplete2], onChange: onChange2 }))),
                React.createElement("div", { className: "g-dateInputWithErrorOnMonthInput-date-input__item" },
                    React.createElement("div", { className: "g-dateInputWithErrorOnMonthInput-form-group" },
                        React.createElement("label", { className: "g-dateInputWithErrorOnMonthInput-label g-dateInputWithErrorOnMonthInput-date-input__label", htmlFor: dobMonthErrorYear }, "Year"),
                        React.createElement("input", { className: "g-dateInputWithErrorOnMonthInput-input g-dateInputWithErrorOnMonthInput-date-input__input g-dateInputWithErrorOnMonthInput-input--width-4", id: dobMonthErrorYear, name: name3, pattern: "[0-9]*", type: constants.type3[type3], disabled: disabled3, readOnly: readOnly3, autoFocus: autoFocus3, value: value3, spellCheck: spellCheck3, autoComplete: constants.autoComplete3[autoComplete3], onChange: onChange3 })))))));
};
exports.default = DateInputWithErrorOnMonthInput;
//# sourceMappingURL=DateInputWithErrorOnMonthInput.js.map