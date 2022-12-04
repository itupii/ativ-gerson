"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var entrada_1 = __importDefault(require("../entrada/entrada"));
var AtualizarProduto = /** @class */ (function () {
    function AtualizarProduto(produto) {
        this.produto = produto;
    }
    AtualizarProduto.prototype.atualizarPreco = function () {
        var entrada = new entrada_1.default();
        var novoPreco = entrada.receberNumero("Qual sera o novo pre\u00E7o do produto: ");
        this.produto.valor = novoPreco;
    };
    return AtualizarProduto;
}());
exports.default = AtualizarProduto;
