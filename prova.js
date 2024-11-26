/*
Função para obter as cores do site */
function getColors() {
    let  vetorCores = []
        for(let i = 1; i <= 148; i++) {
            const colorName = document.querySelector(`#box${i} > span > a`).innerText.toLowerCase()
            vetorCores.push(colorName)
        }
    return vetorCores
}
//Como executar a função:
getColors()

/*
Função para escolher 10 cores aleatórias do vetor */
function sortearCores(vetorCores){
    let spliceCores = []
    for(let i = 0; i < 10; i++){
        let x = Math.floor(Math.random()*vetorCores.length)
        let corSelect = vetorCores.splice(x, 1)
        spliceCores = [...spliceCores, ...corSelect]
    }

    return spliceCores
}
//Como executar a função:
sortearCores(getColors())


/*
3) Função para sortear uma cor entre as 10 sortidas */
function escolherCor(spliceCores) {
    let x = Math.floor(Math.random()*spliceCores.length)
    let cor_selecionada = spliceCores.splice(x, 1) [0]
    console.log('a cor selecionada é:', cor_selecionada)
}
//Como executar a função:
escolherCor(sortearCores(getColors()))                     
