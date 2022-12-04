"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DeletarCliente = /** @class */ (function () {
    function DeletarCliente(empresa, cliente) {
        this.empresa = empresa;
        this.cliente = cliente;
    }
    DeletarCliente.prototype.excluirCliente = function () {
        var indice = this.empresa.getClientes.indexOf(this.cliente);
        this.empresa.getClientes.splice(indice, 1);
    };
    return DeletarCliente;
}());
exports.default = DeletarCliente;
