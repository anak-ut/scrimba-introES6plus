if (false){
    var example = 1;
    let example1 = 2;
    const example2 = 3
}
console.log(example); // output : undefined
// variabel ada tapi belum bernilai, padahal ada loh =1 ? wkwk
// sepertinya power var ini agak OP, karena walaupun di dalam block,
// masih terdeteksi keberadaannya, beda dengan let const.
// ini disebut hoisting

// console.log(example1); // output : isnot defined
// variabel belum dibuat, alias tidak ada, padahal ada ya di dalam block
// const tidak bisa reassign other value/type data
// tapi dalam bentuk array/ object, bisa ditambah kurang isinya.
// tapi tidak bs reassign data type. misal sudah jadi array, tidak bisa direassign jadi string
// atau number

const konstanta = [];
konstanta.push('bisa')
console.log(konstanta)

const konStanta = {};
konStanta.nama = 'jokontold';
console.log(konStanta);

const cobaReassign = 12;
console.log(cobaReassign);
// cobaReassign = 13;
// console.log(cobaReassign) //gabisa reassign karna typeError

// console.log(example2); // output: isnot defined
// nasib sama dengan let

// kesimpulan : let const kalau didalam block, no power jika diakses dari luar

// meskipun const diharapkan tidak dapat direassign, tetapi tidak jamin 100%
// const tidak diubah
// untuk mencegah ada yang ubah const, lakukan dengan property Object.freeze()
const rockVariable = Object.freeze([1,3,3,99]);
// rockVariable.push(69); // dicomment agar tidak error. array method push gagal ubah rockVariable
console.log(rockVariable);
// output : TypeError: Cannot add property 4, object is not extensible

// sumber bacaan : https://www.joshwcomeau.com/javascript/the-const-deception/
