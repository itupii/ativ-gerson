"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Servico = /** @class */ (function () {
    function Servico(tipo, valor, id) {
        this.tipo = tipo;
        this.valor = valor;
        this.id = id;
    }
    Object.defineProperty(Servico.prototype, "getID", {
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    return Servico;
}());
exports.default = Servico;
