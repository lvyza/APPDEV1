//essential features

const hobbies = ["watching series", "gaming", "listening to music"];

const hobbyList = hobbies.map((hobby) => {
    return `I enjoy ${hobby}.`;
});

console.log("My Hobbies:");
console.log(hobbyList);


const student = {
name: "Luisa",
    age: 20,
    course: "BSIS"
};

const { name, age } = student;

console.log("Student name:", name);
console.log("Student age:", age);


const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5]; // [1, 2, 3, 4, 5]
console.log(newNumbers);

console.log("Original numbers:", numbers);
console.log("Numbers with additional values:", newNumbers);