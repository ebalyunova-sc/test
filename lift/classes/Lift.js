let Person = require('./Person.js')

let Lift = class {
    constructor() {
        this.numberSeats = 6;
        this.person = [];
        this.direction = 1;  // 1 - движение вверх, -1 - движение вниз
        this.currentFloor = 1;
    }

    setCurrentFloor(currentFloor) {
        this.currentFloor = currentFloor;
    }

    getNumberSeats() {
        return this.numberSeats;
    }

    getPerson() {
        return this.person;
    }

    getDirection() {
        return this.direction;
    }

    getCurrentFloor() {
        return this.currentFloor;
    }

    getNumberPeopleInLift() {
        return this.person.length;
    }

    addPerson(personNumber, desiredFloor) {
        let person = new Person(personNumber, this.currentFloor, desiredFloor);
        this.person.push(person);
        this.numberSeats--;
    }

    deletePerson(index) {
        this.person.splice(index, 1);
        this.numberSeats++;
    }

    changeDirection() {
        if (this.currentFloor === 1 && this.direction === -1) {
            this.direction = 1;
        }
        else if (this.currentFloor === 9 && this.direction === 1) {
            this.direction = -1;
        }
    }
}

module.exports = Lift;