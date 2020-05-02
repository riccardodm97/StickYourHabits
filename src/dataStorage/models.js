function guidGenerator() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

export class Habit {
    constructor(name, low, medium, high) {
        this.id = guidGenerator(); 
        this.name = name;
        this.low = low;
        this.medium = medium;
        this.high = high;
    }
}
