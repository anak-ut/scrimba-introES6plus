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
let biodata = `namanya adalah ${name} dari klub ${club} dari kota ${city}`;
console.log(biodata);