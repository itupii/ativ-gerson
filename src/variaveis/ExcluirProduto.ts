import Entrada from "../entrada/entrada";
import Empresa from "../modelos/empresa";
import Produto from "../modelos/produto";
import Listagem from "../variaveis/lista";

export default class DeletarProduto {
private empresa: Empresa
private produto: Produto
constructor(empresa: Empresa, produto: Produto) {
this.empresa = empresa
this.produto = produto
}
public excluirProduto() {
let indice = this.empresa.getProdutos.indexOf(this.produto)
this.empresa.getProdutos.splice(indice, 1)
}

}