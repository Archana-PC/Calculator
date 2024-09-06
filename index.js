

let display = document.getElementById("display");




function addToDisplay(input) {
    display.value += input;
}

// function deletfromDisplay(input) {
//     display.value.slice(0, -1);
// }

function addToCalculate(input) {
    display.value = eval(display.value);
}

function clearDisplay(input) {
    display.value = "";
}