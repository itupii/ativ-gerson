"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BuscadorIDProduto = /** @class */ (function () {
    function BuscadorIDProduto(produto, id) {
        this.produtos = produto;
        this.id = id;
    }
    BuscadorIDProduto.prototype.buscarProdutoID = function () {
        var alvoID = undefined;
        for (var y = 0; y < this.produtos.length; y++) {
            if (this.produtos[y].getID.valueOf() == this.id) {
                alvoID = this.produtos[y];
                break;
            }
        }
        return alvoID;
    };
    return BuscadorIDProduto;
}());
exports.default = BuscadorIDProduto;
