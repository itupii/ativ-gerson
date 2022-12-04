"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var entrada_1 = __importDefault(require("../entrada/entrada"));
var produto_1 = __importDefault(require("../modelos/produto"));
var cadastro_1 = __importDefault(require("../variaveis/cadastro"));
var CadastroProduto = /** @class */ (function (_super) {
    __extends(CadastroProduto, _super);
    function CadastroProduto(produto) {
        var _this = _super.call(this) || this;
        _this.produto = produto;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    CadastroProduto.prototype.cadastrar = function () {
        console.log("\nQual produto tu desejas cadastrar");
        var nome = this.entrada.receberTexto("Por favor informe o nome do produto: ");
        var valor = this.entrada.receberNumero("Por favor informe o Valor do produto: ");
        var id = this.entrada.receberNumero("Digite o ID: ");
        var produto = new produto_1.default(nome, valor, id);
        this.produto.push(produto);
        console.log("\nCadastro conclu\u00EDdo :)\n");
    };
    return CadastroProduto;
}(cadastro_1.default));
exports.default = CadastroProduto;
