
let habitId = 1;

export class Habit {
    constructor(name, low, medium, high) {
        this.id = habitId++;
        this.name = name;
        this.low = low;
        this.medium = medium;
        this.high = high;
    }
}
