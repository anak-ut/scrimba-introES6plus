export class Animal{
    constructor(type,legs){
        this.type = type;
        this.legs = legs;
    }
    // define func
    makeSound(sound='loud noise'){
        console.log(sound);
    }
}