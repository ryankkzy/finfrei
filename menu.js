import prompt from 'prompt-sync'
let ler = prompt()

export function menu(msg){
    console.log(msg)
    let escolha = Number(ler())
    return escolha
}

export function menu2(msg){
    console.log(msg)
    let escolha = ler()
    return escolha
}