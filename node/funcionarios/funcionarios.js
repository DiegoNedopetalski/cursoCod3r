const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data

    function mulherChinesaMenosPaga(array) {
        const mulherChinesa = []
        for (item of array) {
            if (item.genero === 'F' && item.pais === 'China') {
                mulherChinesa.push(item)
            }
        }
        const menosPaga = mulherChinesa[0]
        for (item of mulherChinesa) {
            if (menosPaga < item) {
                menosPaga = item
            }
        }

        return console.log(menosPaga)
    }
    
    mulherChinesaMenosPaga(funcionarios);
})


//mulher chinesa com menor salário

