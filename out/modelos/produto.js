"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Produto = /** @class */ (function () {
    function Produto(nome, valor, id) {
        this.nome = nome;
        this.valor = valor;
        this.id = id;
    }
    Object.defineProperty(Produto.prototype, "getID", {
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    return Produto;
}());
exports.default = Produto;
