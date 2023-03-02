let Person = require('./Person.js')


let Floor = class {
    constructor(number) {
        this.floorNumber = number;
        this.peopleOnDesiredFloor = [];
        this.peopleGoDown = [];
        this.peopleGoUp = [];
    }

    getPersonGoDown() {
        return this.peopleGoDown[0];
    }

    getPersonGoUp() {
        return this.peopleGoUp[0];
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

    checkIfFloorEmpty() {
        if (this.peopleGoUp.length === 0
            && this.peopleGoDown.length === 0) {
            return 1;
        }
        else {
            return 0;
        }
    }

    infoFloor() {
        let numberPeopleOnDesiredFloor = this.peopleOnDesiredFloor.length,
            numberPeopleGoUp = this.peopleGoUp.length,
            numberPeopleGoDown = this.peopleGoDown.length;

        console.log('-----\nfloor number - ' + this.floorNumber);
        if (numberPeopleOnDesiredFloor !== 0) {
            console.log('\tpeople on desired floor');
            for (let i = 0; i < numberPeopleOnDesiredFloor; i++) {
                console.log(this.peopleOnDesiredFloor[i].getPersonInfo());
            }
        }
        if (numberPeopleGoUp !== 0) {
            console.log('\tpeople go up')
            for (let i = 0; i < numberPeopleGoUp; i++) {
                console.log(this.peopleGoUp[i].getPersonInfo());
            }
        }
        if (numberPeopleGoDown !== 0) {
            console.log('\tpeople go down')
            for (let i = 0; i < numberPeopleGoDown; i++) {
                console.log(this.peopleGoDown[i].getPersonInfo());
            }
        }
        if (numberPeopleOnDesiredFloor === 0
            && numberPeopleGoUp === 0
            && numberPeopleGoDown === 0) {
            console.log('floor is empty')
        }
        console.log('-----');
    }
}

module.exports = Floor;