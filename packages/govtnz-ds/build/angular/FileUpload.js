"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "FileUpload";
    }
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "id", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "disabled", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "readOnly", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "autoFocus", void 0);
    __decorate([
        core_1.Input()
    ], AppComponent.prototype, "name", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: "g-FileUpload",
            template: "\n    <div class=\"g-fileUpload-form-group\">\n      <label class=\"g-fileUpload-label\" for=\"{{ id }}\">\n        Upload a file\n      </label>\n\n      <input\n        class=\"g-file-upload\"\n        id=\"{{ id }}\"\n        name=\"{{ name }}\"\n        type=\"file\"\n        disabled=\"{{ disabled }}\"\n        readonly=\"{{ readOnly }}\"\n        autofocus=\"{{ autoFocus }}\"\n      />\n    </div>\n  "
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=FileUpload.js.map