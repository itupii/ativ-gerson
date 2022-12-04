"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClientesQueMaisConsumiram = /** @class */ (function () {
    function ClientesQueMaisConsumiram(clientes) {
        this.clientes = clientes;
    }
    ClientesQueMaisConsumiram.prototype.mostrarMaioresConsumidores = function () {
        var listaClienteOrdenada = this.clientes.sort(function (c1, c2) {
            if (c1.getProdutosConsumidos.length > c2.getProdutosConsumidos.length)
                return 1;
            if (c1.getProdutosConsumidos.length < c2.getProdutosConsumidos.length)
                return -1;
            return 0;
        });
        console.log(" clientes que mais consumirm produtos:");
        console.log(listaClienteOrdenada);
    };
    ClientesQueMaisConsumiram.prototype.mostrarMaioresConsumidoresServiços = function () {
        var listaClienteOrdenada2 = this.clientes.sort(function (c1, c2) {
            if (c1.getServicosConsumidos.length > c2.getServicosConsumidos.length)
                return 1;
            if (c1.getServicosConsumidos.length < c2.getServicosConsumidos.length)
                return -1;
            return 0;
        });
        console.log("esses s\u00E3o os clientes que mais consumirm servicos:");
        console.log(listaClienteOrdenada2);
    };
    return ClientesQueMaisConsumiram;
}());
exports.default = ClientesQueMaisConsumiram;
