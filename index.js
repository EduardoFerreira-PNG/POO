import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo", 11122233309);

const cliente2 = new Cliente("Alice", 88822233309);

const cliente3 = new Cliente("Eduardo", 55822233309);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(500);

const conta2 = new ContaCorrente(1002, cliente2);
conta2.depositar(300);

const conta3 = new ContaCorrente(1003, cliente3);
contaCorrenteRicardo.transferir(200, conta2);
conta2.transferir(300, conta3);

console.log(cliente1)
console.log(conta2)
console.log(conta3)

console.log(ContaCorrente)