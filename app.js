import prompt from 'prompt-sync'
import { menu } from './menu.js'
import { depositar, exibirSaldo, sacar, simulador } from './financeiro.js'
import { boasVindas} from './exibicao.js'
let ler = prompt()

let Menu = ''
let saldoAtualizado = 0
do
{
    let boasvindas = boasVindas()
    console.log(boasvindas);
    Menu = menu(`
    Escolha uma das Opções: 
    1- Depositar
    2- Sacar
    3- Exibir Saldo
    4- Simular Investimento.
    5- Sair `)
    console.clear()
    if(Menu == 1){
        saldoAtualizado = depositar('Qual o valor do depósito?' , saldoAtualizado)
    } else if(Menu == 2){
        saldoAtualizado = sacar('Quantos voce deseja sacar?' , saldoAtualizado)
    } else if(Menu == 3){
        let Exibir = exibirSaldo('Seu saldo atual atual é de: ', saldoAtualizado)
        console.log(Exibir);
    } else if(Menu == 4){
        let simu = simulador('Qual seria o valor aplicado?', 'Por quanto tempo seria esse investimento?', 'Você teria um lucro de:')
        console.log(`R$${simu}`);
    }


} while(Menu != 5)
console.log(`Obrigado por usar os nossos sistemas.
Fim do programa.`);