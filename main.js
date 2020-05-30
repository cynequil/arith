import { arith } from './arith.js';

let parent = document.getElementById('btn-container');
let list = parent.querySelectorAll('.num-btn,.op-btn');
let display = document.querySelector('input[type=text]');
let clear = document.getElementById('clear');
let equal = document.getElementById('equal');

function value() {
    // console.log(this.dataset.value + " Clicked");
    let x = this.dataset.value;
    if (x === '=') return;
    if (display.value === "0") {
        display.value = x;
    }
    else {
        display.value += x;
    }
}

list.forEach(node => {
    node.addEventListener('click', value);
});
clear.addEventListener('click', function () {
    display.value = '0';
})
equal.addEventListener('click', function () {
    display.value = arith(display.value);
    console.log(arith(display.value));
})