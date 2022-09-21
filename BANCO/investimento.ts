export {ContaInvestimento}
import {Cliente} from "./cliente"
import {cliente} from "./cliente"

class ContaInvestimento{
    mostrarDados(){
        console.log(`
        Cliente: ${cliente.nome}
        Saldo Investido: R$${cliente.sInvestido}`)
    }
}
var cc = new ContaInvestimento();
cc.mostrarDados();