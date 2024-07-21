import { Player,TennisPlayer } from "./13b_classChallenge.js";

const messi = new Player('messi','argentine'); //this is object
console.log(messi);
messi.introduce(); //already in console.log, no need console.log more;

const roger = new TennisPlayer('roger', 'spain', 77 )
console.log(roger);
roger.playTennis();
roger.introduce();