const colors = ['robotron-vermelho.png','robotron-rosa.png','robotron-preto.png','robotron-branco.png','robotron-azul.png','robotron-amarelo.png']
let colorIndex = 0

function changeColor(x){
    const robo = document.getElementsByClassName('robo')[0]
    if(x == 1){
        colorIndex = colorIndex + 1 > 5 ? -1 : colorIndex
        robo.src = 'img/'+ colors[colorIndex+x]
        colorIndex++
		console.log(colorIndex)
    }else{
        colorIndex = colorIndex - 1 < 0 ? 6 : colorIndex
        robo.src = 'img/'+ colors[colorIndex+x]
        colorIndex--
		console.log(colorIndex)
    }
}

const controllers = document.getElementsByClassName('controle-contador')
function changeContentValues(x, y){
    let value = Number(controllers[x].value)
    if(y == "+"){
        controllers[x].value = value + 1 <= 10 ? String(value + 1).padStart(2,"0") : value
    }else{
        controllers[x].value = value - 1 >= 0 ? String(value + 1).padStart(2,"0") : value
    }
}


