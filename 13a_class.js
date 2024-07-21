import { Animal,Cat } from "./13_class.js";

// method dan properti class Animal tidak dapat dipanggil langsung,
// harus lewat membuat objek baru
let cat = new Animal('cat',4);
console.log(cat);

// lets override legs
cat.legs=99;
console.log(cat);
console.log(`${cat.type} has ${cat.legs} legs`);
cat.makeSound('ngeoooong');

// method static dapat dipanggil tanpa perlu membuat objek baru
Animal.cetak10();
console.log(Animal.creator);

// panggil class Cat
let catWomen = new Cat('catwomen',2);
console.log(catWomen.legs);
catWomen.makeSound('saya adalah cat women');