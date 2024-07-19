// destructuring objects

//cara panggil biasa
const player = {
    name : 'Kebab James',
    club : 'LA lekers',
    addres : {
        city : 'Los Galaktos'
    }
};

console.log(player.name);
console.log(player.club);
console.log(player.addres.city);

// mari kita destruct ges

const { name,club,addres : {city} }= player;
const biodata = `namanya adalah ${name} dari klub ${club} dari kota ${city}`;
console.log(biodata);

// challenge
const student = {
    nama : 'gibrotot',
    age : 69,
    projek : {
        gameDadu : "ngocok dadu ampe lemess"
    }
};

// mari kita destructure challenge ini
const {nama, age, projek, projek: {gameDadu}} = student;
let biodataStudent = `si ${nama} berumur ${age} punya game ${projek} yaitu ${gameDadu}`;
console.log(biodataStudent);