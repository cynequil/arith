function value() {
    console.log(this.dataset.value + " Clicked");
    let x = this.dataset.value;
    if (display.value === "0") {
        display.value = x;
    }
    else {
        display.value += x;
    }
}
let parent = document.getElementById('btn-container');
let list = parent.querySelectorAll('.num-btn,.op-btn');
let display = document.querySelector('input[type=text]');
let clear = document.getElementById('clear');

list.forEach(node => {
    node.addEventListener('click', value);
});
clear.addEventListener('click', function () {
    display.value = '0';
})