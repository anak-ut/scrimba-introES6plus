let incomes = [30,55,12];
let total = 0;
for (let incom of incomes){
    console.log(incom);
    total += incom;
}
console.log(total);

console.log('--------------------')
//lets iterate string

let fullnames = 'jokontolol';
for (let char of fullnames){
    console.log(char);
}

// challenge
console.log('-----challenge-----')
const students = [
    {nama: 'jon', city: 'nyu yok'},
    {nama: 'piter', city: 'paris'},
    {nama: 'ket', city: 'sidni'}
];

for (let student of students){
    console.log(`${student.nama} lives in ${student.city}`)
}