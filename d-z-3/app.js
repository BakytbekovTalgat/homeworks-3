// console.log('Hello')
// Функции - Function


// function declaration

// 1)

function positive(num){
    return Math.abs(num);
  }
  
  console.log(positive(20))
  console.log(positive(-2))

// 2)
console.log((prompt().length));

s = prompt()
function deadline(s) {
    console.log(s.length)
}
deadline(s)

// 3)


function sum(a, b) {
    return a + b;
}
function substract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divison(a, b) {
    return a / b;
}
const OPERATIONS = {
    sum: '+',
    substract: "-",
    multiply: '*',
    divison: '/',

}
function calculate({a, b, operation}) {
    let result = null;

    switch (operation) {
        case OPERATIONS.sum:
            result = sum(a, b);
            break;
        case OPERATIONS.substract:
            result = substract(a, b);
            break;
        case OPERATIONS.multiply:
            result = multiply(a, b);
            break;
        case OPERATIONS.divison:
            result = divison(a, b);
            break 
        default:
            break;
    }
    return result;
}

