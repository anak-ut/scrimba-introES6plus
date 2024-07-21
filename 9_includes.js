// includes() method untuk mengecek apakah ada elemen tertentu di dalam array
// includes() return boolean true/false

// sedangkan indexOf() me-return posisi index yag dicari
// dan return  -1 jika tidak ditemukan

let nuArray = [1,2,3,4,5];
console.log(nuArray.indexOf(4)); // return 3 (posisi ke-3) elemen 4
console.log(nuArray.includes(4)); //return true, ada elemen 4 di array tsb

// challenge
console.log('----- challenge -----');
const listIngredients = [
    'flour',
    'sugar',
    'eggs',
    'butter'
];

function cekIngredient(things){
    if (listIngredients.includes(things)){
        console.log('yok bikin kue')
    } else {
        console.log(`pending, kurang ${things}`)
    }
}

cekIngredient('choco');