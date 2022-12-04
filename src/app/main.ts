import Entrada from "../entrada/entrada";


import Cliente from "../modelos/cliente";


import Empresa from "../modelos/empresa"


import Produto from "../modelos/produto";


import Servico from "../modelos/servico";


import AtualizarProduto from "../variaveis/atualizaçãoProduto";


import AtualizaçãoServico from "../variaveis/atualizaçãoervico";


import BuscadorCPF from "../variaveis/buscarCPF";


import BuscaID from "../variaveis/buscaID";


import BuscadorIDProduto from "../variaveis/BuscadordProduto";


import Cadastro from "../variaveis/cadastro";


import CadastroCliente from "../variaveis/CadastroCliente";


import CadastroProduto from "../variaveis/CadastroProduto";


import CadastroServico from "../variaveis/CadastroServiços";


import MaiorConsumo from "../variaveis/MaiorConsumo";


import MaisGasto from "../variaveis/maisgasto";


import ExcluirrProduto from "../variaveis/ExcluirProduto";


import ExcluirServico from "../variaveis/excluirServiço";


import ListaClientes from "../variaveis/listaClientes"; 


import ListaClientesGenero from "../variaveis/listaClientesGenero";


import ListaProduto from "../variaveis/listaProdutos";


import ListaServiços from "../variaveis/listaServiços"; 


import ListagemProduto from "../variaveis/listaProdutos";


import DeletarCliente from "../variaveis/deletarCLiente";




console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()

let tarefas = true

while (tarefas) {
console.log(`Opções:`);
console.log(`1 - Cadastrar cliente`);
console.log(`2 - Listar todos os clientes`);
console.log(`3 - Listar todos os clientes por gênero`);
console.log(`4-  Cadastrar um serviço`);
console.log(`5-  Contratar um serviço`);
console.log(`6-  listar todos serviços`);
console.log(`7-  atualizar um serviço`);
console.log(`8-  deletar um serviço`);
console.log(`9-  Cadastrar um produto`);
console.log(`10- listar todos produto`);
console.log(`11- atualizar um produto`);
console.log(`12- Comprar um produto`);
console.log(`13- deletar um produto`);
console.log(`14- deletar um cliente`);
console.log(`0 - Sair`);

let entrada = new Entrada()
let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)
switch (opcao) {
case 1:
let cadastro = new CadastroCliente(empresa.getClientes)
cadastro.cadastrar()
break;
case 2:
let listagem = new ListaClientes(empresa.getClientes)
let clienteConsumidores = new MaisGasto(empresa.getClientes)
let clientesGastadores = new MaisGasto(empresa.getClientes)
listagem.listar()
clienteConsumidores.mostrarMaiorgasto()
clienteConsumidores.mostrarMaioresConsumo
clientesGastadores.maioresGastos()
break;
case 3:
let listagemGenero = new ListaClientesGenero(empresa.getClientes)
listagemGenero.listar()
break;
case 4:
let cadastroServico = new CadastroServico(empresa.getServicos)
cadastroServico.cadastrar()
break;
case 5:
let digitarCpf = entrada.receberTexto(`Por favor digite seu CPF: `)
let buscador = new BuscadorCPF(empresa.getClientes, digitarCpf)
let clienteAlvo = buscador.buscarClienteCPF()
console.log(clienteAlvo?.nome)
let listaServiços = new ListaServiços(empresa.getServicos)
ListaServiços.listar()
let digitarId = entrada.receberNumero(`${clienteAlvo?.nome}, qual servico voçê deseja contratar: `)
let buscarid = new BuscaID(empresa.getServicos, digitarId)
let servicoAlvo = buscarid.buscarServicoID() as Servico

clienteAlvo?.getServicosConsumidos.push(servicoAlvo)


console.log(`voce deseja contratar o serviço de ${servicoAlvo?.tipo} `)
break;
case 6:
listaServiços = new ListaServiços(empresa.getServicos)
ListaServiços.listar()
break;
case 7:
digitarId = entrada.receberNumero(`qual servico voçê deseja alterar: `)
buscarid = new BuscaID(empresa.getServicos, digitarId)
servicoAlvo = buscarid.buscarServicoID() as Servico
let atualizar = new AtualizaçãoServico(servicoAlvo)
atualizar.atualizarPreco()
listaServiços = new ListaServiços(empresa.getServicos)
ListaServiços.listar()
break;
case 8:
digitarId = entrada.receberNumero(`qual servico voçê deseja deletar: `)
buscarid = new BuscaID(empresa.getServicos, digitarId)
servicoAlvo = buscarid.buscarServicoID() as Servico
let excluirServiço = new ExcluirServico(empresa, servicoAlvo)
excluirServiço.excluirServico()
console.log(`você deletou o serviço de ${servicoAlvo.tipo}`)
listaServiços = new ListaServiços(empresa.getServicos)
ListaServiços.listar()
break;
case 9:
let cadastroProduto = new CadastroProduto(empresa.getProdutos)
cadastroProduto.cadastrar()
break;
case 10:
let ListaProdutos = new ListaProduto(empresa.getProdutos)
ListaProdutos.listar()
break;
case 11:
digitarId = entrada.receberNumero(`qual produto voçê deseja alterar: `)
let BuscaIDProduto = new BuscadorIDProduto(empresa.getProdutos, digitarId)
let produtoAlvo = BuscaIDProduto.buscarProdutoID() as Produto
let atualizarProduto = new AtualizarProduto(produtoAlvo)
atualizarProduto.atualizarPreco()
ListaProdutos = new ListaProduto(empresa.getProdutos)
ListaProdutos.listar()
break;
case 12:
digitarCpf = entrada.receberTexto(`Por favor digite seu CPF: `)
buscador = new BuscadorCPF(empresa.getClientes, digitarCpf)
clienteAlvo = buscador.buscarClienteCPF()
console.log(clienteAlvo?.nome)
ListaProdutos = new ListaProduto(empresa.getProdutos)
ListaProdutos.listar()
digitarId = entrada.receberNumero(`${clienteAlvo?.nome}, qual produto voçê deseja contratar: `)
BuscaIDProduto = new BuscadorIDProduto(empresa.getProdutos, digitarId)
produtoAlvo = BuscaIDProduto.buscarProdutoID() as Produto
            
clienteAlvo?.getProdutosConsumidos.push(produtoAlvo)

console.log(`voce deseja contratar o serviço de ${produtoAlvo?.nome} `)
break;
case 13:
digitarId = entrada.receberNumero(`qual produto voçê deseja deletar: `)
            
BuscaIDProduto = new BuscadorIDProduto(empresa.getProdutos, digitarId)
produtoAlvo = BuscaIDProduto.buscarProdutoID() as Produto
let deletarProduto = new ExcluirrProduto(empresa, produtoAlvo)
deletarProduto.excluirProduto()
console.log(`você deletou o serviço de ${produtoAlvo.nome}`)
ListaProdutos = new ListagemProduto(empresa.getProdutos)
ListaProdutos.listar()
break;
case 14:
digitarCpf = entrada.receberTexto(`Por favor digite o CPF do cliente: `)
buscador = new BuscadorCPF(empresa.getClientes, digitarCpf)
clienteAlvo = buscador.buscarClienteCPF() as Cliente
console.log(clienteAlvo?.nome)
let deletarCliente = new DeletarCliente(empresa, clienteAlvo)
deletarCliente.excluirCliente()
console.log(`você deletou o cliente: ${clienteAlvo.nome}`)
listagem = new ListaClientes(empresa.getClientes)
listagem.listar()
break;
case 0:
tarefas = false
console.log(`Até mais`)
break;
default:
console.log(`Operação não entendida :(`)
}
}