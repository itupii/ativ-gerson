import Entrada from "../entrada/entrada";
import Empresa from "../modelos/empresa";
import Servico from "../modelos/servico";
import Listagem from "../variaveis/lista";

export default class DeletarServico {
private empresa: Empresa
private servico: Servico
constructor(empresa: Empresa, servico: Servico) {
this.empresa = empresa
this.servico = servico
}

public excluirServico() {
let indice = this.empresa.getServicos.indexOf(this.servico)
this.empresa.getServicos.splice(indice, 1)
}

}