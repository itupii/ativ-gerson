import Cliente from "../modelos/cliente";
import empresa from "../modelos/empresa";

export default class ClientesQueMaisConsumiram {
private clientes: Array<Cliente>
constructor(clientes: Array<Cliente>) {
this.clientes = clientes}

public mostrarMaioresConsumidores() {
let listaClienteOrdenada = this.clientes.sort((c1, c2) => {
if (c1.getProdutosConsumidos.length > c2.getProdutosConsumidos.length) return 1;
if (c1.getProdutosConsumidos.length < c2.getProdutosConsumidos.length) return -1;
return 0;
})
console.log(` clientes que mais consumirm produtos:`)
 console.log(listaClienteOrdenada)
}

public mostrarMaioresConsumidoresServiços() {
let listaClienteOrdenada2 = this.clientes.sort((c1, c2) => {
if (c1.getServicosConsumidos.length > c2.getServicosConsumidos.length) return 1;
if (c1.getServicosConsumidos.length < c2.getServicosConsumidos.length) return -1;
return 0;
})
console.log(`esses são os clientes que mais consumirm servicos:`)
console.log(listaClienteOrdenada2)
}
}