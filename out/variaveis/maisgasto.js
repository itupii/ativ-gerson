"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClientesQueMaisGastaram = /** @class */ (function () {
    function ClientesQueMaisGastaram(clientes) {
        this.clientes = clientes;
    }
    ClientesQueMaisGastaram.prototype.maioresGastos = function () {
        var listaClienteOrdenada2 = this.clientes.sort(function (c1, c2) {
            var valorC1 = 0;
            c1.getProdutosConsumidos.forEach(function (produto) { valorC1 = valorC1 + produto.valor; });
            c1.getServicosConsumidos.forEach(function (servico) { valorC1 = valorC1 + servico.valor; });
            var valorC2 = 0;
            c2.getProdutosConsumidos.forEach(function (produto) { valorC2 = valorC2 + produto.valor; });
            c2.getServicosConsumidos.forEach(function (servico) { valorC2 = valorC2 + servico.valor; });
            if (valorC1 > c2.getServicosConsumidos.length)
                return 1;
            if (valorC1 < c2.getServicosConsumidos.length)
                return -1;
            return 0;
            if (valorC1 > c2.getProdutosConsumidos.length)
                return 1;
            if (valorC1 < c2.getProdutosConsumidos.length)
                return -1;
            return 0;
        });
    };
    return ClientesQueMaisGastaram;
}());
exports.default = ClientesQueMaisGastaram;
