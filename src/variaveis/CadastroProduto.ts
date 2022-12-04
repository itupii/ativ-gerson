import Entrada from "../entrada/entrada";
import Produto from "../modelos/produto";
import Cadastro from "../variaveis/cadastro";

export default class CadastroProduto extends Cadastro {
private : Array<Produto> | undefined
private entrada: Entrada
produto: Produto[];
constructor(produto: Array<Produto>) {
super()
this.produto = produto
this.entrada = new Entrada()
}
public cadastrar(): void {
console.log(`\nQual produto tu desejas cadastrar`);
let nome = this.entrada.receberTexto(`Por favor informe o nome do produto: `)
let valor = this.entrada.receberNumero(`Por favor informe o Valor do produto: `);  
let id = this.entrada.receberNumero(`Digite o ID: `);

let produto = new Produto(nome, valor, id);
this.produto.push(produto)
console.log(`\nCadastro concluído :)\n`);
}
}