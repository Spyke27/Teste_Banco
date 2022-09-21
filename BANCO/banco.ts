//Crie uma classe conta bancária e apresente os atributos e métodos referentes a esta classe, em seguida
//crie um objeto conta bancária, defina as instâncias deste objeto e apresente as informações
//deste objeto no console.


export {Banco}
import {Cliente} from "./cliente"
import {cliente} from "./cliente"

class Banco{
    mostrarDados(){
        console.log(`
        Olá, ${cliente.nome}.\n
        Saldo conta Corrente: R$${cliente.sCorrente}
        Saldo Poupança: R$${cliente.sPoupanca}
        Valor total em Investimentos: R$${cliente.sInvestido}

        Saldo disponível na conta: R$${cliente.sTotal}
        `)
    }
}
var cc = new Banco();
cc.mostrarDados();