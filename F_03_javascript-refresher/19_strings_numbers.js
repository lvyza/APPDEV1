//strings and numbers

let name = "  Luisa  ";
let province = "Pangasinan";

console.log(name.trim());
console.log(province.split(""));
console.log(name.toUpperCase());
console.log(province.includes("Pang"));
console.log(province.slice(0, 5));

console.log(`Hello, ${name.trim()} from ${province}!`);

let age = "20";
let price = "150.50";

console.log(parseInt(age));
console.log(parseInt(price));
console.log(Number(price).toFixed(2));

let result = Number("hello");
console.log(result);
console.log(Number.isNaN(result));