function revendaDeCarros(carro){
    switch (carro) {
        case 'hatch': console.log('Compra efetuada com sucesso!')
        break
        case 'sedans': case 'motocicletas': case 'caminhonetes': 
        console.log('Tem certeza que não prefere esse modelo?')
        break
        default: console.log('Não trabalhamos com esse tipo de automóvel aqui')
    }
}

revendaDeCarros('hatch')
revendaDeCarros('sedans')
revendaDeCarros('motocicletas')
revendaDeCarros('caminhonetes')
revendaDeCarros('a')