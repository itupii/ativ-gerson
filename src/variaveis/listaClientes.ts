import Cliente from "../modelos/cliente";
import Produto from "../modelos/produto";
import ClientesQueMaisConsumiram from "./MaiorConsumo";
import Listagem from "../variaveis/lista";
export default class ListagemClientes extends Listagem {
private clientes: Array<Cliente>
constructor(clientes: Array<Cliente>) {
super()
this.clientes = clientes
}
public listar(): void {

let clientesQueMaisConsumiram = new ClientesQueMaisConsumiram(this.clientes)
console.log(`-`)
console.log(clientesQueMaisConsumiram)

console.log(`-`)
console.log(`\nLista de todos os clientes:`);
this.clientes.forEach(cliente => {
console.log(`Nome: ` + cliente.nome);
console.log(`Nome social: ` + cliente.nomeSocial);
console.log(`CPF: ` + cliente.getCpf.getValor);
console.log(`-`)


console.log(`Serviços Usados`)
let valorServicos = 0
cliente.getServicosConsumidos.forEach(servico => {
console.log(`Nome do serviço: ${servico.tipo}`)
console.log(`valor do servioço: ${servico.valor}`)
valorServicos =  servico.valor + valorServicos
})
console.log(`produtos consumidos`)
let valorProdutos = 0
cliente.getProdutosConsumidos.forEach(produto => {
console.log(`Nome do serviço: ${produto.nome}`)
console.log(`valor do servioço: ${produto.valor}`)
valorProdutos =  produto.valor + valorProdutos
})
let valorTotal = valorServicos + valorProdutos
console.log(`Valor total gasto em serviço: ${valorTotal}`)
console.log(`-`);
});
console.log(`\n`);
}
}