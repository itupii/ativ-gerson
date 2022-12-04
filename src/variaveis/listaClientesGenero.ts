import Cliente from "../modelos/cliente";
import Listagem from "./lista";

export default class ListagemClientesGenero extends Listagem {
private clientes: Array<Cliente>
constructor(clientes: Array<Cliente>) {
super()
this.clientes = clientes
}
public listar(): void {
console.log(`\nLista de todos os clientes por genero:`);
console.log(`\nGenero masculino:`);
this.clientes.forEach(cliente => {
if(cliente.sexo.includes('M')){
 console.log(`Nome: ` + cliente.nome);
console.log(`Nome social: ` + cliente.nomeSocial);
console.log(`CPF: ` + cliente.getCpf.getValor);
console.log(`-`);
}
});
console.log(`\nGenero feminino:`);
this.clientes.forEach(cliente => {
if(cliente.sexo.includes('F')){
console.log(`Nome: ` + cliente.nome);
console.log(`Nome social: ` + cliente.nomeSocial);
 console.log(`CPF: ` + cliente.getCpf.getValor);
console.log(`-`); }
});
console.log(`\n`);
}
}