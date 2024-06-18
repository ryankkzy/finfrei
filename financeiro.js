import prompt from 'prompt-sync'
let ler = prompt()

export function depositar(msg, saldo){
    console.log(msg);
    let depositado = Number(ler())
    console.clear()
    while(depositado <= 0){
        console.log('Valor de deposito tem que ser maior que 0');
        depositado = Number(ler())
        console.clear()
    }
    console.clear()
    console.log(`Depósito concluido com sucesso!`)
    console.log('Precione a tecla enter para continuar:')
    ler()
    console.clear()
    let novoSaldo = saldo + depositado
    return novoSaldo
}

export function sacar(msg, saldo){
    console.log(msg);
    let sacar = Number(ler())

    while(sacar <= 0){
        console.log('Valor de deposito tem que ser maior que 0');
        sacar = Number(ler())
    }
    console.log(`Saque concluido com sucesso!`)
    console.clear()
    console.log('Precione a tecla enter para continuar:')
    ler()
    console.clear()
    let novoSaldo = saldo - sacar
    return novoSaldo
}

export function exibirSaldo(msg, saldo){
    let Exibicao = saldo
    console.log(msg);
    return Exibicao
}

export function simulador(msg, msg2, msg3){
    console.log(msg)
    let valor = Number(ler())
    
    console.log(msg2);
    let tempo = Number(ler())
    
    let juro = tempo * 2 / 100
    let final = valor * (1 + juro + 0.01)**3
    let total = final.toFixed(0) - valor
    console.log(msg3);
    return total.toFixed(0)
}