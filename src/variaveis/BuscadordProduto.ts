import Produto from "../modelos/produto"

export default class BuscadorIDProduto {
private produtos: Array<Produto>
public id: number
constructor(produto: Array<Produto>, id: number) {
this.produtos = produto
this.id = id
}public buscarProdutoID() {
let alvoID: Produto | undefined = undefined 

for (let y = 0; y < this.produtos.length; y++) {
if(this.produtos[y].getID.valueOf() == this.id ){
alvoID = this.produtos[y]
break
}
}
return alvoID}
}