let NUMBER_OF_FLOORS = require('../constants/numberOfFloors.js');


let Person = class {
    constructor(personNumber, currentFloor = 0, desiredFloor = 0) {
        this.personNumber = personNumber;

        if (currentFloor === 0) {
            this.currentFloor = Math.round((Math.random()*(NUMBER_OF_FLOORS - 1))) + 1;
        }
        else {
            this.currentFloor = currentFloor;
        }

        if (desiredFloor === 0) {
            this.desiredFloor = Math.round((Math.random()*(NUMBER_OF_FLOORS - 1))) + 1;
            // изменение желаемого этажа, если при генерации текущий и желаемый этажи оказались одним этажем
            while (this.desiredFloor === this.currentFloor) {
                this.desiredFloor = Math.round((Math.random()*(NUMBER_OF_FLOORS - 1))) + 1;
            }
        }
        else {
            this.desiredFloor = desiredFloor;
        }
        // direction === 1 - движение вверх, -1 - движение вниз
        if (this.currentFloor < this.desiredFloor) {
            this.direction = 1;
        }
        else {
            this.direction = -1;
        }
    }

    setCurrentFloor(floor) {
        this.currentFloor = floor;
    }

    getPersonNumber() {
        return this.personNumber;
    }

    getCurrentFloor() {
        return this.currentFloor;
    }

    getDesiredFloor() {
        return this.desiredFloor;
    }

    getDirection() {
        return this.direction;
    }

    getPersonInfo() {
        return 'person number - ' + this.personNumber + '\tdesired floor - ' + this.desiredFloor;
    }
}

module.exports = Person;