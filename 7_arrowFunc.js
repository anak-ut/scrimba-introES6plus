// contoh funct declaration
// fungsi biasa
function menuMakan(){
    return 'bayar dulu baru mesen !'
};

// contoh funct anonymous
// tidak ada nama function, langsung dimasukkan ke variabel
const utangDulu = function(){
    return 'bayar utang lah wak ..'
}

// contoh arrow funct
const utangBre = (value) =>{
    return `pinjem duit ${value} donk wak ..`
}

console.log(`funct declaration : ${menuMakan()}`)
console.log(`function anonymous : ${utangDulu()}`)
console.log(`arrow funct : ${utangBre(100)}`);