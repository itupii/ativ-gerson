"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DeletarProduto = /** @class */ (function () {
    function DeletarProduto(empresa, produto) {
        this.empresa = empresa;
        this.produto = produto;
    }
    DeletarProduto.prototype.excluirProduto = function () {
        var indice = this.empresa.getProdutos.indexOf(this.produto);
        this.empresa.getProdutos.splice(indice, 1);
    };
    return DeletarProduto;
}());
exports.default = DeletarProduto;
