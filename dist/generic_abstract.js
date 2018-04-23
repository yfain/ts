"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseClass = (function () {
    function BaseClass() {
    }
    BaseClass.prototype.saveItem = function (item) {
        if (item.id === 0) {
            console.log("id is zero");
        }
    };
    return BaseClass;
}());
exports.BaseClass = BaseClass;
var ConcreteClass = (function () {
    function ConcreteClass() {
    }
    return ConcreteClass;
}());
exports.ConcreteClass = ConcreteClass;
var Subclass = (function (_super) {
    __extends(Subclass, _super);
    function Subclass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Subclass;
}(BaseClass));
exports.Subclass = Subclass;
var subclass = new Subclass();
var concrete = new ConcreteClass();
concrete.id = 0;
subclass.saveItem(concrete);
