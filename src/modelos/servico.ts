import  idServico from './idServiço';
export default class Servico {
public tipo!: string
public valor!: number
public id !: number
constructor(tipo: string, valor: number, id:number) {
this.tipo = tipo
this.valor = valor
this.id = id
}
public get getID(){
return this.id
}
}