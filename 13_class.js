export class Animal{
    constructor(type,legs){ // cara initialize  property class Animal
        this.type = type;
        this.legs = legs;
    }
    // define func dalam hal ini adalah method
    makeSound(sound='loud noise'){ // initialize method
        console.log(sound);
    }
    static cetak10(){ //static method
        console.log('cetak 10')
    }
    static creator = 'god'; // static property
}

export class Cat extends Animal { // membuat class Cat turunan dari Animal
    constructor(type,legs,tail){
        super(type,legs);
        this.tail = tail;
    }
    makeSound(sound='miaww'){
        console.log(sound);
    }
}