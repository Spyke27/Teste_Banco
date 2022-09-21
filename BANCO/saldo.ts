export {Saldo}
import {Cliente} from "./cliente"
import {cliente} from "./cliente"

class Saldo{
    mostrarDados(){
        console.log(`
        Saldo Total na conta: R$${cliente.sTotal}`)
    }
}
var cc = new Saldo();
cc.mostrarDados();