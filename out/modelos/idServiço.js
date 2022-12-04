"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ID = /** @class */ (function () {
    function ID(valor) {
        this.valor = valor;
    }
    Object.defineProperty(ID.prototype, "getValor", {
        get: function () {
            return this.valor;
        },
        enumerable: false,
        configurable: true
    });
    return ID;
}());
exports.default = ID;
