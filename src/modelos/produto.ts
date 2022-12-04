export default class Produto {
public nome!: string
public valor!: number
public id !: number
constructor(nome: string, valor: number, id:number) {
this.nome = nome
this.valor = valor
this.id = id
}
public get getID(){
return this.id
}
}