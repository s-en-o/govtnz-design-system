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
var StyledInput = styled.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  margin: 0;\n  opacity: 0;\n  :disabled {\n    cursor: default;\n  }\n  margin-top: 0px;\n"], ["\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  margin: 0;\n  opacity: 0;\n  :disabled {\n    cursor: default;\n  }\n  margin-top: 0px;\n"])));
var Radio = function (_a) {
    var id = _a.id, hintId = _a.hintId, disabled = _a.disabled, readOnly = _a.readOnly, autoFocus = _a.autoFocus, name = _a.name, value = _a.value, checked = _a.checked, onChange = _a.onChange;
    return (React.createElement(StyledInput, { "aria-describedby": hintId, id: id, name: name, type: "radio", disabled: disabled, readOnly: readOnly, autoFocus: autoFocus, value: value, checked: checked, onChange: onChange }));
};
exports.default = Radio;
var templateObject_1;
//# sourceMappingURL=Radio.js.map