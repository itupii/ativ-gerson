import Entrada from "../entrada/entrada";
import Servico from "../modelos/servico";
import Cadastro from "../variaveis/cadastro";

export default class CadastroServico extends Cadastro {
private : Array<Servico> | undefined
private entrada: Entrada
servico: Servico[];
constructor(servico: Array<Servico>) {
super()
this.servico = servico
this.entrada = new Entrada()}
public cadastrar(): void {
console.log(`\nQual servico tu desejas cadastrar`);
let tipo = this.entrada.receberTexto(`Por favor informe o nome do serviço: `)
let valor = this.entrada.receberNumero(`Por favor informe o Valor do serviço: `); 
let id = this.entrada.receberNumero(`Digite o ID: `);
let servico = new Servico(tipo, valor, id);this.servico.push(servico)
console.log(`\nCadastro concluído :)\n`);
}
}