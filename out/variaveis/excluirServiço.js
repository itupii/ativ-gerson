"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DeletarServico = /** @class */ (function () {
    function DeletarServico(empresa, servico) {
        this.empresa = empresa;
        this.servico = servico;
    }
    DeletarServico.prototype.excluirServico = function () {
        var indice = this.empresa.getServicos.indexOf(this.servico);
        this.empresa.getServicos.splice(indice, 1);
    };
    return DeletarServico;
}());
exports.default = DeletarServico;
