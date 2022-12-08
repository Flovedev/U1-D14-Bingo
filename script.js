function onLoadActions() {

    for (let number = 1; number <= 76; number++) {
        let numberNode = document.createElement('div')

        numberNode.classList.add('number');
        numberNode.innerText = number;

        document.getElementById('container').appendChild(numberNode)

    }
};

let display = document.getElementById('displayer');

function onRandomClick() {
};


function numberGenerator() {
    let value = Math.floor(Math.random() * 76);
    display.innerText = value


    let divs = document.getElementsByClassName('number')
    let priceNumber = []
    for (let index = 0; index < divs.length; index++) {
        if (value === divs[index].innerText);

    }
};


window.onload = onLoadActions;