//functions

function greet(name) {
    return `Hello, ${name}! Welcome to JavaScript.`;
}

const square = (num) => {
    return num * num;
};


function calculator(a, b) {
    return { sum: a + b, product: a * b };
}

console.log(greet("Luisa"));
console.log(square(4));
console.log(calculator(3, 5));