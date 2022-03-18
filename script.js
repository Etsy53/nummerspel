let number = Math.floor(Math.random() * 10 + 1);
let correct = false;

const balls = document.querySelector("h1");
const mindre = document.querySelector(".mindre");
const mer = document.querySelector(".mer");

balls.innerHTML = number;

mindre.addEventListener("click", function(){
    let oldNumber = number;
    number = Math.floor(Math.random() * 10 + 1);

    //  skriver ut nummret till html
    balls.innerHTML = number;

    //  ändrar variabeln "correct" till true om det nya nummret är större
    if (oldNumber >  number) {
        correct = true;
        console.log(correct);
    } else {
        correct = false;
        console.log(correct);
    }
    correct = false;
})

mer.addEventListener("click", function(){
    let oldNumber = number;
    number = Math.floor(Math.random() * 10 + 1);

    balls.innerHTML = number;

    if (oldNumber < number) {
        correct = true;
        console.log(correct);
    } else {
        correct = false;
        console.log(correct);
    }
})