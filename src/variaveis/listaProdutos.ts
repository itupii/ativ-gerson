import Produto from "../modelos/produto";
import Listagem from "../variaveis/lista";

export default class ListagemProduto extends Listagem {
private produtos: Array<Produto>
constructor(produtos: Array<Produto>) {
super()
this.produtos = produtos
    }public listar(): void {
console.log(`\nLista de todos os produtos:`);
this.produtos.forEach(Produto => {
console.log(`Nome: ` + Produto.nome);
console.log(`Valor: ` + Produto.valor);
console.log(`Id: ` + Produto.id);
console.log(`-`);
});console.log(`\n`);
}
}