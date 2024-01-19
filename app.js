
//dado 1


let firstDice=Math.floor(Math.random() *6) + 1

let firstDiceImage= `dice${firstDice}.png`

let firstDiceImage1= `img/${firstDiceImage}`

let image1= document.querySelectorAll('img')[0]

image1.setAttribute('src', firstDiceImage1)




//dado 2

let secondDice= Math.floor(Math.random() *6) +1

let secondDiceImage2= `img/dice${secondDice}.png`

document.querySelectorAll('img')[1].setAttribute('src', secondDiceImage2)




//winner

if (firstDice > secondDice){
    document.querySelector('h1').innerHTML= '🏆 Jogador 1 Venceu!'
} else if (secondDice > firstDice) {
    document.querySelector('h1').innerHTML= '🏆 Jogador 2 Venceu!'
}