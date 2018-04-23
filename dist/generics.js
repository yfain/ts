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
var Person = (function () {
    function Person() {
    }
    return Person;
}());
var Employeee = (function (_super) {
    __extends(Employeee, _super);
    function Employeee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Employeee;
}(Person));
var Animal = (function () {
    function Animal() {
    }
    return Animal;
}());
var myWorkers = [];
myWorkers[0] = new Person();
myWorkers[1] = new Employeee();
//myWorkers[2] = new Animal();
