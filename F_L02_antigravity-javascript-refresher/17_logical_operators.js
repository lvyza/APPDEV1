//logical operators

const isLoggedIn = true;
const hasInternet = true;
const canWatch = isLoggedIn && hasInternet;
console.log("Can watch:", canWatch);

const username = "";
const displayName = username || "Luisa";
console.log("Display name:", displayName);

const isGuest = false;
console.log("Is not a guest:", !isGuest);

const welcomeMessage = isLoggedIn && `Welcome, ${displayName}!`;
console.log(welcomeMessage);