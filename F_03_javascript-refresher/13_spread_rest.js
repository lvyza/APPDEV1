//spread and rest

const places = ["Pangasinan", "Pampanga", "Batanes"];
const morePlaces = [...places, "Cebu"];

console.log("Places:", places);
console.log("More places:", morePlaces);

const user = {
    name: "Luisa",
    province: "Pangasinan"
};

const newUser = {
    ...user,
    email: "padillonluisa391@gmail.com"
};

console.log("User:", user);
console.log("New user:", newUser);

function sum(...args) {
    return args.reduce((total, number) => total + number, 0);
}

console.log("Sum:", sum(10, 20, 30, 40));