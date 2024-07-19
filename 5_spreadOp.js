let contact = ['marrie', 'jol', 'danny'];
let personalContact = contact; // this isnot copying, this just referenced
// contact changes and personalContact changes too

console.log(contact);
console.log(personalContact);
//yok kita tambah yudi ke contact
//harapannya si personalContact sih tidak berubah

contact.push('yudi gancet');
console.log(contact);
console.log(personalContact);
// waduh yudi gancet kecopy juga ges di personalContact
// makanya pake spread operator

let privateContact = [...contact]
console.log(privateContact);
// kita apus yudi di privateContact
console.log('---- hasil akhir ----');
privateContact.pop();
console.log(`contact : ${contact}`);
console.log(`personalContact: ${personalContact}`);
console.log(`privateContact : ${privateContact}`); // yudi gancet sudah terhapus
// kontak baru orang kelurahan pjbtContact
// spreading + nambah elements
console.log('----- pejabat version -----')
let pjbtContact = ['lemos', 'jokontot']
// saya mw copy pjbtContact + 'agum gumeler'
let petugasPartyContact = ['agum gumeler',...pjbtContact]
console.log(pjbtContact);
console.log(petugasPartyContact);
// spreading object
console.log('----- spread object -----');
let person={
    nama: 'adam',
    umur: 69,
    city: 'mancesterd'
};
console.log(person);
// mari buat personModif + color: 'green'
let personModif = {...person,
    color: 'green',
    sempak: 'XXXLLLL'
};
console.log('----- final result -----');
console.log(personModif);
console.log(person);

// challenge ni boss
console.log('----- challenges -----');
const shopList = [
    'eggs',
    'milk',
    'butter'
];
const shopBasket = [...shopList,'bread','pasta'];
console.log(shopList);
console.log(shopBasket);
