export {cliente}
export class Cliente{
    nome: string;
    sCorrente: number;
    sPoupanca: number;
    sInvestido: number;
    sTotal: number;
    ativo: boolean;

}
var cliente = new Cliente();
cliente.nome = "Neymar Jr";
cliente.sCorrente = 1200.999;
cliente.sPoupanca = 89.70;
cliente.sInvestido = 5000.888;
cliente.sTotal = cliente.sPoupanca + cliente.sCorrente;
cliente.ativo = true;