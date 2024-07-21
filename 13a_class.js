import { Animal } from "./13_class.js";
let cat = new Animal('cat',4);
console.log(cat);

// lets override legs
cat.legs=99;
console.log(cat);
console.log(`${cat.type} has ${cat.legs} legs`);
cat.makeSound('ngeoooong');