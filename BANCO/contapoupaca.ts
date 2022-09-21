
export {ContaPoupanca}
import {Cliente} from "./cliente"
import {cliente} from "./cliente"

class ContaPoupanca{
    mostrarDados(){
        console.log(`
        Cliente: ${cliente.nome}
        Saldo na Conta Poupança: R$${cliente.sPoupanca}`)
    }
}
var cc = new ContaPoupanca();
cc.mostrarDados();