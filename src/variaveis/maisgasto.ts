import Cliente from "../modelos/cliente";
import Empresa from "../modelos/empresa";
import ListagemClientes from "../variaveis/listaClientes";

export default class ClientesQueMaisGastaram {
private clientes: Array<Cliente>
mostrarMaiorgasto: any;
mostrarMaioresConsumo: any;
constructor(clientes: Array<Cliente>) {
this.clientes = clientes
}public maioresGastos(){
let listaClienteOrdenada2 = this.clientes.sort((c1, c2) => {

let valorC1 = 0;
c1.getProdutosConsumidos.forEach(produto => {valorC1 = valorC1 + produto.valor})
c1.getServicosConsumidos.forEach(servico => {valorC1 = valorC1 + servico.valor})
let valorC2 = 0;
c2.getProdutosConsumidos.forEach(produto => {valorC2 = valorC2 + produto.valor})
c2.getServicosConsumidos.forEach(servico => {valorC2 = valorC2 + servico.valor})

if (valorC1 > c2.getServicosConsumidos.length) return 1;
if (valorC1 < c2.getServicosConsumidos.length) return -1;
return 0;
if (valorC1 > c2.getProdutosConsumidos.length) return 1;
if (valorC1 < c2.getProdutosConsumidos.length) return -1;
return 0;

}) }
}