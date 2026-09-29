//errors and json

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }

    return a / b;
}

try {
    console.log(divide(10, 2));
    console.log(divide(10, 0));
} catch (error) {
    console.log("Error:", error.message);
}

const student = {
    name: "Luisa",
    age: 20,
    course: "BSIS"
};

const jsonData = JSON.stringify(student);
console.log(jsonData);

const parsedData = JSON.parse(jsonData);
console.log(parsedData);
console.log(parsedData.name);