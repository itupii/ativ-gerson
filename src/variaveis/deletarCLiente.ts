import Entrada from "../entrada/entrada";
import Empresa from "../modelos/empresa";
import Cliente from "../modelos/cliente";
import Listagem from "../variaveis/lista";

export default class DeletarCliente {
    
    
    
private empresa: Empresa
private cliente: Cliente
constructor(empresa: Empresa, cliente: Cliente) {
this.empresa = empresa
this.cliente = cliente
}

public excluirCliente() {
let indice = this.empresa.getClientes.indexOf(this.cliente)
this.empresa.getClientes.splice(indice, 1)
}

}