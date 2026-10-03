//modules import

import greet, { userInfo } from "./15_modules_export.js";

console.log(greet(userInfo.name));
console.log(`Province: ${userInfo.province}`);