"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var entrada_1 = __importDefault(require("../entrada/entrada"));
var AtualizarServico = /** @class */ (function () {
    function AtualizarServico(servico) {
        this.servico = servico;
    }
    AtualizarServico.prototype.atualizarPreco = function () {
        var entrada = new entrada_1.default();
        var novoPreco = entrada.receberNumero("Qual sera o novo pre\u00E7o do servi\u00E7o: ");
        this.servico.valor = novoPreco;
    };
    return AtualizarServico;
}());
exports.default = AtualizarServico;
