//destructuring


const person = {
    name: "Luisa",
    province: "Pangasinan"
};

const { name, province } = person;

console.log("Name:", name);
console.log("Province:", province);


const favoritePlaces = ["Pangasinan", "Pampanga", "Batanes"];
const [firstPlace, secondPlace, thirdPlace] = favoritePlaces;

console.log("First place:", firstPlace);
console.log("Second place:", secondPlace);
console.log("Third place:", thirdPlace);


function printName({ name }) {
    console.log(`My name is ${name}.`);
}

printName(person);