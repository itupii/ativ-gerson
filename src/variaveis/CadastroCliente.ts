import Entrada from "../entrada/entrada";
import Cliente from "../modelos/cliente";
import CPF from "../modelos/cpf";
import Cadastro from "./cadastro";

export default class CadastroCliente extends Cadastro {
private clientes: Array<Cliente>
private entrada: Entrada
constructor(clientes: Array<Cliente>) {
super()
this.clientes = clientes
this.entrada = new Entrada()
}
public cadastrar(): void {
console.log(`\nInício do cadastro do cliente`);
let nome = this.entrada.receberTexto(` informe o nome do cliente: `)
let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social: `)
let sexo = this.entrada.receberTexto('por favor, digite seu sexo[F/M]: ')
let valor = this.entrada.receberTexto(`Por favor informe o  cpf: `);
let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
let partesData = data.split('/')
let ano = new Number(partesData[2].valueOf()).valueOf()
let mes = new Number(partesData[1].valueOf()).valueOf()
let dia = new Number(partesData[0].valueOf()).valueOf()
let dataEmissao = new Date(ano, mes, dia)
let cpf = new CPF(valor, dataEmissao);
let cliente = new Cliente(nome, nomeSocial, sexo.toUpperCase(), cpf);
this.clientes.push(cliente)
console.log(`\nCadastro finalizado :)\n`);
}
}