import Servico from "../modelos/servico"

export default class BuscadorID {
private servicos: Array<Servico>
public id: number
constructor(servicos: Array<Servico>, id: number) {
this.servicos = servicos
this.id = id
}
public buscarServicoID() {
let alvoID: Servico | undefined = undefined 

for (let x = 0; x < this.servicos.length; x++) {
if(this.servicos[x].getID.valueOf() == this.id ){
alvoID = this.servicos[x]
break
}
}

return alvoID
}
}