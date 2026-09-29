//closures and scope


function createCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counterA = createCounter();
const counterB = createCounter();

console.log(counterA());
console.log(counterA());
console.log(counterB());
console.log(counterB());
console.log(counterA());

{
    let message = "This is block scoped";
    console.log(message);
}

function showName() {
    let name = "Luisa";
    console.log(name);
}

showName();