function onLoadActions() {

    for (let number = 1; number <= 76; number++) {
        let numberNode = document.createElement('div')

        numberNode.classList.add('number');
        numberNode.innerText = number;

        document.getElementById('container').appendChild(numberNode)

    }
};

let display = document.getElementById('displayer');


function numberGenerator() {
    let value = Math.floor(Math.random() * 76);
    let toString = value.toString()
    display.innerText = value

    let divs = document.getElementsByClassName('number')

    for (let index = 0; index < divs.length; index++) {
        if (toString === divs[index].innerText) {
            divs[index].classList.add('pickedNumber')

        }
    };

}
window.onload = onLoadActions;