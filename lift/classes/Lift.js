let Person = require('./Person.js')

let NUMBER_OF_FLOORS = require('../constants/numberOfFloors.js');
let NUMBER_OF_SEATS = require('../constants/numberOfSeats.js');


let Lift = class {
    constructor() {
        this.numberSeats = NUMBER_OF_SEATS;
        this.person = [];
        this.direction = 1;  // 1 - движение вверх, -1 - движение вниз
        this.currentFloor = 1;
    }

    setCurrentFloor(currentFloor) {
        this.currentFloor = currentFloor;
    }

    getNumberFreeSeats() {
        return (this.numberSeats - this.person.length);
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
    }

    deletePerson(index) {
        this.person.splice(index, 1);
    }

    changeDirection() {
        if (this.currentFloor === 1) {
            this.direction = 1;
        }
        else if (this.currentFloor === NUMBER_OF_FLOORS) {
            this.direction = -1;
        }
    }
}

module.exports = Lift;