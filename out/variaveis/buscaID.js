"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BuscadorID = /** @class */ (function () {
    function BuscadorID(servicos, id) {
        this.servicos = servicos;
        this.id = id;
    }
    BuscadorID.prototype.buscarServicoID = function () {
        var alvoID = undefined;
        for (var x = 0; x < this.servicos.length; x++) {
            if (this.servicos[x].getID.valueOf() == this.id) {
                alvoID = this.servicos[x];
                break;
            }
        }
        return alvoID;
    };
    return BuscadorID;
}());
exports.default = BuscadorID;
