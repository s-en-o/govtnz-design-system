"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var styled = __importStar(require("styled-components"));
var StyledDetails = styled.details(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.25;\n  color: #0b0c0c;\n  margin-bottom: 20px;\n  display: block;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  @media print {\n    color: #000000;\n  }\n  @media (min-width: 40.0625em) {\n    margin-bottom: 30px;\n  }\n"], ["\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.25;\n  color: #0b0c0c;\n  margin-bottom: 20px;\n  display: block;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n  }\n  @media print {\n    color: #000000;\n  }\n  @media (min-width: 40.0625em) {\n    margin-bottom: 30px;\n  }\n"])));
var StyledSummary = styled.summary(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-block;\n  position: relative;\n  margin-bottom: 5px;\n  padding-left: 25px;\n  color: #005ea5;\n  cursor: pointer;\n  :hover {\n    color: #2b8cc4;\n  }\n  :focus {\n    outline: 4px solid #ffbf47;\n    outline-offset: -1px;\n    color: #0b0c0c;\n    background: #ffbf47;\n  }\n  ::-webkit-details-marker {\n    display: none;\n  }\n  :before {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    margin: auto;\n    display: block;\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-color: transparent;\n    -webkit-clip-path: polygon(0% 0%, 100% 50%, 0% 100%);\n    clip-path: polygon(0% 0%, 100% 50%, 0% 100%);\n    border-width: 7px 0 7px 12.124px;\n    border-left-color: inherit;\n  }\n  :before {\n    display: block;\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-color: transparent;\n    -webkit-clip-path: polygon(0% 0%, 50% 100%, 100% 0%);\n    clip-path: polygon(0% 0%, 50% 100%, 100% 0%);\n    border-width: 12.124px 7px 0 7px;\n    border-top-color: inherit;\n  }\n"], ["\n  display: inline-block;\n  position: relative;\n  margin-bottom: 5px;\n  padding-left: 25px;\n  color: #005ea5;\n  cursor: pointer;\n  :hover {\n    color: #2b8cc4;\n  }\n  :focus {\n    outline: 4px solid #ffbf47;\n    outline-offset: -1px;\n    color: #0b0c0c;\n    background: #ffbf47;\n  }\n  ::-webkit-details-marker {\n    display: none;\n  }\n  :before {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    margin: auto;\n    display: block;\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-color: transparent;\n    -webkit-clip-path: polygon(0% 0%, 100% 50%, 0% 100%);\n    clip-path: polygon(0% 0%, 100% 50%, 0% 100%);\n    border-width: 7px 0 7px 12.124px;\n    border-left-color: inherit;\n  }\n  :before {\n    display: block;\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-color: transparent;\n    -webkit-clip-path: polygon(0% 0%, 50% 100%, 100% 0%);\n    clip-path: polygon(0% 0%, 50% 100%, 100% 0%);\n    border-width: 12.124px 7px 0 7px;\n    border-top-color: inherit;\n  }\n"])));
var StyledSpan = styled.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  text-decoration: underline;\n"], ["\n  text-decoration: underline;\n"])));
var StyledDiv = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  padding: 15px;\n  padding-left: 20px;\n  border-left: 5px solid #bfc1c3;\n"], ["\n  padding: 15px;\n  padding-left: 20px;\n  border-left: 5px solid #bfc1c3;\n"])));
var Details = function (_a) {
    var open = _a.open, detailsContent021Df3Ae2Ee5440B98CbFfc001B25657 = _a.detailsContent021Df3Ae2Ee5440B98CbFfc001B25657;
    return (React.createElement(StyledDetails, { role: "group", open: open },
        React.createElement(StyledSummary, { "aria-controls": detailsContent021Df3Ae2Ee5440B98CbFfc001B25657, "aria-expanded": "false", role: "button" },
            React.createElement(StyledSpan, null, "Help with nationality")),
        React.createElement(StyledDiv, { "aria-hidden": "true", id: detailsContent021Df3Ae2Ee5440B98CbFfc001B25657 }, "We need to know your nationality so we can work out which elections you\u2019re entitled to vote in. If you can\u2019t provide your nationality, you\u2019ll have to send copies of identity documents through the post.")));
};
exports.default = Details;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=Details.js.map