const anakBabi = (item='saya')=>{
    console.log(`${item} anak babi !`)
}

anakBabi('jokontol');
anakBabi();

// default params is passing value event the argument/param is empty
console.log('----- challenge -----');

const buyShop = (food='something')=>{
    return `i'm going to buy ${food}`;
}
console.log(buyShop('sempak goku'));
console.log(buyShop());