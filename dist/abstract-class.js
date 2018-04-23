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
var Workers;
(function (Workers) {
    var IPayable = (function () {
        function IPayable() {
        }
        return IPayable;
    }());
    var Employee = (function (_super) {
        __extends(Employee, _super);
        function Employee() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Employee.prototype.increasePay = function (percent) {
            console.log("Increasing employee salary by " + percent);
        };
        return Employee;
    }(IPayable));
    var Contractor = (function (_super) {
        __extends(Contractor, _super);
        function Contractor() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Contractor.prototype.increasePay = function (percent) {
            console.log("Increasing contractor's rate by " + percent);
        };
        return Contractor;
    }(IPayable));
    var workers = [];
    workers[0] = new Employee();
    workers[1] = new Contractor();
    workers.forEach(function (worker) { return worker.increasePay(20); });
})(Workers || (Workers = {}));
