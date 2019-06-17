"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

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

var DateInputWithErrors = function DateInputWithErrors(_ref) {
  var dobErrorsHint = _ref.dobErrorsHint,
      dobErrorsError = _ref.dobErrorsError,
      dobErrors = _ref.dobErrors,
      dobErrorsDay = _ref.dobErrorsDay,
      name = _ref.name,
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      autoFocus = _ref.autoFocus,
      value = _ref.value,
      type = _ref.type,
      spellCheck = _ref.spellCheck,
      autoComplete = _ref.autoComplete,
      onChange = _ref.onChange,
      dobErrorsMonth = _ref.dobErrorsMonth,
      name2 = _ref.name2,
      disabled2 = _ref.disabled2,
      readOnly2 = _ref.readOnly2,
      autoFocus2 = _ref.autoFocus2,
      value2 = _ref.value2,
      type2 = _ref.type2,
      spellCheck2 = _ref.spellCheck2,
      autoComplete2 = _ref.autoComplete2,
      onChange2 = _ref.onChange2,
      dobErrorsYear = _ref.dobErrorsYear,
      name3 = _ref.name3,
      disabled3 = _ref.disabled3,
      readOnly3 = _ref.readOnly3,
      autoFocus3 = _ref.autoFocus3,
      value3 = _ref.value3,
      type3 = _ref.type3,
      spellCheck3 = _ref.spellCheck3,
      autoComplete3 = _ref.autoComplete3,
      onChange3 = _ref.onChange3;
  return _react["default"].createElement("div", {
    className: "g-dateInputWithErrors-form-group g-dateInputWithErrors-form-group--error"
  }, _react["default"].createElement("fieldset", {
    "aria-describedby": dobErrorsHint !== undefined || dobErrorsError !== undefined ? "".concat(dobErrorsHint ? dobErrorsHint : "").concat(dobErrorsError ? " " + dobErrorsError : "") : undefined,
    className: "g-dateInputWithErrors-fieldset",
    role: "group"
  }, _react["default"].createElement("legend", {
    className: "g-dateInputWithErrors-fieldset__legend"
  }, "What is your date of birth?"), _react["default"].createElement("span", {
    className: "g-dateInputWithErrors-hint",
    id: dobErrorsHint
  }, "For example, 31 3 1980"), _react["default"].createElement("span", {
    className: "g-dateInputWithErrors-error-message",
    id: dobErrorsError
  }, "Error message goes here"), _react["default"].createElement("div", {
    className: "g-dateInputWithErrors-date-input",
    id: dobErrors
  }, _react["default"].createElement("div", {
    className: "g-dateInputWithErrors-date-input__item"
  }, _react["default"].createElement("div", {
    className: "g-dateInputWithErrors-form-group"
  }, _react["default"].createElement("label", {
    className: "g-dateInputWithErrors-label g-dateInputWithErrors-date-input__label",
    htmlFor: dobErrorsDay
  }, "Day"), _react["default"].createElement("input", {
    className: "g-dateInputWithErrors-input g-dateInputWithErrors-date-input__input g-dateInputWithErrors-input--width-2 g-dateInputWithErrors-input--error",
    id: dobErrorsDay,
    name: name,
    pattern: "[0-9]*",
    type: constants.type[type],
    disabled: disabled,
    readOnly: readOnly,
    autoFocus: autoFocus,
    value: value,
    spellCheck: spellCheck,
    autoComplete: constants.autoComplete[autoComplete],
    onChange: onChange
  }))), _react["default"].createElement("div", {
    className: "g-dateInputWithErrors-date-input__item"
  }, _react["default"].createElement("div", {
    className: "g-dateInputWithErrors-form-group"
  }, _react["default"].createElement("label", {
    className: "g-dateInputWithErrors-label g-dateInputWithErrors-date-input__label",
    htmlFor: dobErrorsMonth
  }, "Month"), _react["default"].createElement("input", {
    className: "g-dateInputWithErrors-input g-dateInputWithErrors-date-input__input g-dateInputWithErrors-input--width-2 g-dateInputWithErrors-input--error",
    id: dobErrorsMonth,
    name: name2,
    pattern: "[0-9]*",
    type: constants.type2[type2],
    disabled: disabled2,
    readOnly: readOnly2,
    autoFocus: autoFocus2,
    value: value2,
    spellCheck: spellCheck2,
    autoComplete: constants.autoComplete2[autoComplete2],
    onChange: onChange2
  }))), _react["default"].createElement("div", {
    className: "g-dateInputWithErrors-date-input__item"
  }, _react["default"].createElement("div", {
    className: "g-dateInputWithErrors-form-group"
  }, _react["default"].createElement("label", {
    className: "g-dateInputWithErrors-label g-dateInputWithErrors-date-input__label",
    htmlFor: dobErrorsYear
  }, "Year"), _react["default"].createElement("input", {
    className: "g-dateInputWithErrors-input g-dateInputWithErrors-date-input__input g-dateInputWithErrors-input--width-4 g-dateInputWithErrors-input--error",
    id: dobErrorsYear,
    name: name3,
    pattern: "[0-9]*",
    type: constants.type3[type3],
    disabled: disabled3,
    readOnly: readOnly3,
    autoFocus: autoFocus3,
    value: value3,
    spellCheck: spellCheck3,
    autoComplete: constants.autoComplete3[autoComplete3],
    onChange: onChange3
  }))))));
};

var _default = DateInputWithErrors;
exports["default"] = _default;