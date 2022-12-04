import Entrada from "../entrada/entrada";
import Produto from "../modelos/produto";
import Listagem from "../variaveis/lista";

export default class AtualizarProduto {
private produto: Produto
constructor(produto: Produto) {
    this.produto = produto
}

public atualizarPreco()
{
let entrada = new Entrada()
let novoPreco = entrada.receberNumero(`Qual sera o novo preço do produto: `)
this.produto.valor = novoPreco
}

}