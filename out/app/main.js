"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var entrada_1 = __importDefault(require("../entrada/entrada"));
var empresa_1 = __importDefault(require("../modelos/empresa"));
var atualiza__oProduto_1 = __importDefault(require("../variaveis/atualiza\u00E7\u00E3oProduto"));
var atualiza__oervico_1 = __importDefault(require("../variaveis/atualiza\u00E7\u00E3oervico"));
var buscarCPF_1 = __importDefault(require("../variaveis/buscarCPF"));
var buscaID_1 = __importDefault(require("../variaveis/buscaID"));
var BuscadordProduto_1 = __importDefault(require("../variaveis/BuscadordProduto"));
var CadastroCliente_1 = __importDefault(require("../variaveis/CadastroCliente"));
var CadastroProduto_1 = __importDefault(require("../variaveis/CadastroProduto"));
var CadastroServi_os_1 = __importDefault(require("../variaveis/CadastroServi\u00E7os"));
var maisgasto_1 = __importDefault(require("../variaveis/maisgasto"));
var ExcluirProduto_1 = __importDefault(require("../variaveis/ExcluirProduto"));
var excluirServi_o_1 = __importDefault(require("../variaveis/excluirServi\u00E7o"));
var listaClientes_1 = __importDefault(require("../variaveis/listaClientes"));
var listaClientesGenero_1 = __importDefault(require("../variaveis/listaClientesGenero"));
var listaProdutos_1 = __importDefault(require("../variaveis/listaProdutos"));
var listaServi_os_1 = __importDefault(require("../variaveis/listaServi\u00E7os"));
var listaProdutos_2 = __importDefault(require("../variaveis/listaProdutos"));
var deletarCLiente_1 = __importDefault(require("../variaveis/deletarCLiente"));
console.log("Bem-vindo ao cadastro de clientes do Grupo World Beauty");
var empresa = new empresa_1.default();
var tarefas = true;
while (tarefas) {
    console.log("Op\u00E7\u00F5es:");
    console.log("1 - Cadastrar cliente");
    console.log("2 - Listar todos os clientes");
    console.log("3 - Listar todos os clientes por g\u00EAnero");
    console.log("4-  Cadastrar um servi\u00E7o");
    console.log("5-  Contratar um servi\u00E7o");
    console.log("6-  listar todos servi\u00E7os");
    console.log("7-  atualizar um servi\u00E7o");
    console.log("8-  deletar um servi\u00E7o");
    console.log("9-  Cadastrar um produto");
    console.log("10- listar todos produto");
    console.log("11- atualizar um produto");
    console.log("12- Comprar um produto");
    console.log("13- deletar um produto");
    console.log("14- deletar um cliente");
    console.log("0 - Sair");
    var entrada = new entrada_1.default();
    var opcao = entrada.receberNumero("Por favor, escolha uma op\u00E7\u00E3o: ");
    switch (opcao) {
        case 1:
            var cadastro = new CadastroCliente_1.default(empresa.getClientes);
            cadastro.cadastrar();
            break;
        case 2:
            var listagem = new listaClientes_1.default(empresa.getClientes);
            var clienteConsumidores = new maisgasto_1.default(empresa.getClientes);
            var clientesGastadores = new maisgasto_1.default(empresa.getClientes);
            listagem.listar();
            clienteConsumidores.mostrarMaiorgasto();
            clienteConsumidores.mostrarMaioresConsumo;
            clientesGastadores.maioresGastos();
            break;
        case 3:
            var listagemGenero = new listaClientesGenero_1.default(empresa.getClientes);
            listagemGenero.listar();
            break;
        case 4:
            var cadastroServico = new CadastroServi_os_1.default(empresa.getServicos);
            cadastroServico.cadastrar();
            break;
        case 5:
            var digitarCpf = entrada.receberTexto("Por favor digite seu CPF: ");
            var buscador = new buscarCPF_1.default(empresa.getClientes, digitarCpf);
            var clienteAlvo = buscador.buscarClienteCPF();
            console.log(clienteAlvo === null || clienteAlvo === void 0 ? void 0 : clienteAlvo.nome);
            var listaServiços = new listaServi_os_1.default(empresa.getServicos);
            listaServi_os_1.default.listar();
            var digitarId = entrada.receberNumero("".concat(clienteAlvo === null || clienteAlvo === void 0 ? void 0 : clienteAlvo.nome, ", qual servico vo\u00E7\u00EA deseja contratar: "));
            var buscarid = new buscaID_1.default(empresa.getServicos, digitarId);
            var servicoAlvo = buscarid.buscarServicoID();
            clienteAlvo === null || clienteAlvo === void 0 ? void 0 : clienteAlvo.getServicosConsumidos.push(servicoAlvo);
            console.log("voce deseja contratar o servi\u00E7o de ".concat(servicoAlvo === null || servicoAlvo === void 0 ? void 0 : servicoAlvo.tipo, " "));
            break;
        case 6:
            listaServiços = new listaServi_os_1.default(empresa.getServicos);
            listaServi_os_1.default.listar();
            break;
        case 7:
            digitarId = entrada.receberNumero("qual servico vo\u00E7\u00EA deseja alterar: ");
            buscarid = new buscaID_1.default(empresa.getServicos, digitarId);
            servicoAlvo = buscarid.buscarServicoID();
            var atualizar = new atualiza__oervico_1.default(servicoAlvo);
            atualizar.atualizarPreco();
            listaServiços = new listaServi_os_1.default(empresa.getServicos);
            listaServi_os_1.default.listar();
            break;
        case 8:
            digitarId = entrada.receberNumero("qual servico vo\u00E7\u00EA deseja deletar: ");
            buscarid = new buscaID_1.default(empresa.getServicos, digitarId);
            servicoAlvo = buscarid.buscarServicoID();
            var excluirServiço = new excluirServi_o_1.default(empresa, servicoAlvo);
            excluirServiço.excluirServico();
            console.log("voc\u00EA deletou o servi\u00E7o de ".concat(servicoAlvo.tipo));
            listaServiços = new listaServi_os_1.default(empresa.getServicos);
            listaServi_os_1.default.listar();
            break;
        case 9:
            var cadastroProduto = new CadastroProduto_1.default(empresa.getProdutos);
            cadastroProduto.cadastrar();
            break;
        case 10:
            var ListaProdutos = new listaProdutos_1.default(empresa.getProdutos);
            ListaProdutos.listar();
            break;
        case 11:
            digitarId = entrada.receberNumero("qual produto vo\u00E7\u00EA deseja alterar: ");
            var BuscaIDProduto = new BuscadordProduto_1.default(empresa.getProdutos, digitarId);
            var produtoAlvo = BuscaIDProduto.buscarProdutoID();
            var atualizarProduto = new atualiza__oProduto_1.default(produtoAlvo);
            atualizarProduto.atualizarPreco();
            ListaProdutos = new listaProdutos_1.default(empresa.getProdutos);
            ListaProdutos.listar();
            break;
        case 12:
            digitarCpf = entrada.receberTexto("Por favor digite seu CPF: ");
            buscador = new buscarCPF_1.default(empresa.getClientes, digitarCpf);
            clienteAlvo = buscador.buscarClienteCPF();
            console.log(clienteAlvo === null || clienteAlvo === void 0 ? void 0 : clienteAlvo.nome);
            ListaProdutos = new listaProdutos_1.default(empresa.getProdutos);
            ListaProdutos.listar();
            digitarId = entrada.receberNumero("".concat(clienteAlvo === null || clienteAlvo === void 0 ? void 0 : clienteAlvo.nome, ", qual produto vo\u00E7\u00EA deseja contratar: "));
            BuscaIDProduto = new BuscadordProduto_1.default(empresa.getProdutos, digitarId);
            produtoAlvo = BuscaIDProduto.buscarProdutoID();
            clienteAlvo === null || clienteAlvo === void 0 ? void 0 : clienteAlvo.getProdutosConsumidos.push(produtoAlvo);
            console.log("voce deseja contratar o servi\u00E7o de ".concat(produtoAlvo === null || produtoAlvo === void 0 ? void 0 : produtoAlvo.nome, " "));
            break;
        case 13:
            digitarId = entrada.receberNumero("qual produto vo\u00E7\u00EA deseja deletar: ");
            BuscaIDProduto = new BuscadordProduto_1.default(empresa.getProdutos, digitarId);
            produtoAlvo = BuscaIDProduto.buscarProdutoID();
            var deletarProduto = new ExcluirProduto_1.default(empresa, produtoAlvo);
            deletarProduto.excluirProduto();
            console.log("voc\u00EA deletou o servi\u00E7o de ".concat(produtoAlvo.nome));
            ListaProdutos = new listaProdutos_2.default(empresa.getProdutos);
            ListaProdutos.listar();
            break;
        case 14:
            digitarCpf = entrada.receberTexto("Por favor digite o CPF do cliente: ");
            buscador = new buscarCPF_1.default(empresa.getClientes, digitarCpf);
            clienteAlvo = buscador.buscarClienteCPF();
            console.log(clienteAlvo === null || clienteAlvo === void 0 ? void 0 : clienteAlvo.nome);
            var deletarCliente = new deletarCLiente_1.default(empresa, clienteAlvo);
            deletarCliente.excluirCliente();
            console.log("voc\u00EA deletou o cliente: ".concat(clienteAlvo.nome));
            listagem = new listaClientes_1.default(empresa.getClientes);
            listagem.listar();
            break;
        case 0:
            tarefas = false;
            console.log("At\u00E9 mais");
            break;
        default:
            console.log("Opera\u00E7\u00E3o n\u00E3o entendida :(");
    }
}
