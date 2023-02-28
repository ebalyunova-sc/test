let Person = require('./Person.js')

let Floor = class {
    constructor(number) {
        this.floorNumber = number;
        this.peopleOnDesiredFloor = [];
        this.peopleGoDown = [];
        this.peopleGoUp = [];
    }

    getPeopleOnDesiredFloor() {
        return this.peopleOnDesiredFloor;
    }

    getPeopleGoDown() {
        return this.peopleGoDown;
    }

    getPeopleGoUp() {
        return this.peopleGoUp;
    }

    getNumberPeopleOnDesiredFloor() {
        return this.peopleOnDesiredFloor.length;
    }

    getNumberPeopleGoDown() {
        return this.peopleGoDown.length;
    }

    getNumberPeopleGoUp() {
        return this.peopleGoUp.length;
    }

    addPerson(personNumber, desiredFloor) {
        let person = new Person(personNumber, this.floorNumber, desiredFloor);
        if (desiredFloor === this.floorNumber) {
            person.setCurrentFloor(this.floorNumber);
            this.peopleOnDesiredFloor.push(person);
        }
        else if (person.getDirection() === 1) {
            this.peopleGoUp.push(person);
        }
        else {
            this.peopleGoDown.push(person);
        }
    }

    deletePerson(direction) {
        if (direction === 1) {
            this.peopleGoUp.shift();
        }
        else {
            this.peopleGoDown.shift();
        }
    }
}

module.exports = Floor;