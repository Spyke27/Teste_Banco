
export {ContaCorrente}
import {Cliente} from "./cliente"
import {cliente} from "./cliente"

class ContaCorrente{
    mostrarDados(){
        console.log(`
        Cliente: ${cliente.nome}
        Saldo na Conta Corrente: R$${cliente.sCorrente}`)
    }
}
var cc = new ContaCorrente();
cc.mostrarDados();