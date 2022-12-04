import Servico from "../modelos/servico";
import Listagem from "../variaveis/lista";

export default class ListagemServico extends Listagem {
private servicos: Array<Servico>
static listar: any;
constructor(servicos: Array<Servico>) {
super()
this.servicos = servicos
}
public listar(): void {
console.log(`\nLista de todos os servicos:`);
this.servicos.forEach(servico => {
console.log(`Nome: ` + servico.tipo);console.log(`Valor: ` + servico.valor);
console.log(`Id: ` + servico.id);
console.log(`--------------------------------------`);
});
console.log(`\n`);
}
}