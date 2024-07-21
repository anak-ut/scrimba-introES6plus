export class Player{
    constructor(name, nation){
        this.name = name;
        this.nation = nation;
    }
    introduce(){
        console.log(`${this.name} born in ${this.nation}`);
    }
}

// another copied class/ subclass
export class TennisPlayer extends Player {
    constructor(name,nation, age){
        super(name,nation);
        this.age = age;
    }
    playTennis(){
        console.log(`${this.name} is ${this.age} and play tenis`);
    }
}