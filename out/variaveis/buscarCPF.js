"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BuscadorCPF = /** @class */ (function () {
    function BuscadorCPF(clientes, cpf) {
        this.clientes = clientes;
        this.cpf = cpf;
    }
    BuscadorCPF.prototype.buscarClienteCPF = function () {
        var alvo = undefined;
        for (var i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i].getCpf.getValor == this.cpf) {
                alvo = this.clientes[i];
                break;
            }
        }
        return alvo;
    };
    return BuscadorCPF;
}());
exports.default = BuscadorCPF;
