//arrays

let favoriteFoods = ["Chicken Adobo", "Sinigang", "Bulalo"];

console.log("Original foods:", favoriteFoods);


favoriteFoods.push("Bicol Express");

console.log("Adding a food:", favoriteFoods);


favoriteFoods.shift();

console.log("Removing the first food:", favoriteFoods);


console.log("My favorite foods:");

for (const food of favoriteFoods) {
    console.log("-", food);
}


const liked = favoriteFoods.map((food) => {
    return `I like ${food}`;
});

console.log(liked);