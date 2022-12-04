import Cliente from "../modelos/cliente"

export default class BuscadorCPF {
private clientes: Array<Cliente>
private cpf: string
constructor(clientes: Array<Cliente>, cpf: string) {
this.clientes = clientes
this.cpf = cpf}
public buscarClienteCPF() {
let alvo: Cliente | undefined = undefined 
for (let i = 0; i < this.clientes.length; i++) {
if(this.clientes[i].getCpf.getValor == this.cpf ){
alvo = this.clientes[i]
break
}
} return alvo
}
}