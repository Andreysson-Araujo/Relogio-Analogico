const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand")

const getTime= ()=>{
    const date = new Date();

    return {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
    }
}
/*O setInterval serve para executar uma função
 ou instrução várias vezes em um determinado intervalo de tempo */

 //aqui dentro do setInterval estou fazendo com que ele pegue o ponteiro do segundo e faça a movimentação a cada
 // buscando o segundos definidos na função getTime
 setInterval(() => {
    const {seconds, minutes, hours} = getTime();

    secondHand.style.transform = `translate(0, -50%) rotate(${seconds * 6}deg)`
    minuteHand.style.transform = `translate(0, -50%) rotate(${minutes * 6}deg)`
    hourHand.style.transform = `translate(0, 50%) routate(${hours * 30}deg)`
})
