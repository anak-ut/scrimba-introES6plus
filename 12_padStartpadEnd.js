// method berikut untuk menambah karakter agar mencapai panjang tertentu
// padStart(targetpanjang,string);
// padStart nambah dari awal string
// padEnd nambah dari akhir string;
let example = 'jokontot';
let tambahStart = example.padStart(15,'x');
console.log(tambahStart);
let tambahEnd = example.padEnd(20,'y');
console.log(tambahEnd);
// stringnya tidak ikut berubah walaupun sudah di padStart sebelumnya.

//challenge
console.log('----- challenge -----');
let links = 'yutube.com/codingtutor360';
console.log(links.padStart(100).length) // ditambahnya string kosong karna tidak disebutkan
// di dalam parameter
// panjang data awal tidak teroverride
