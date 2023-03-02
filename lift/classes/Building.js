let Person = require('./Person.js');
let Floor = require('./Floor.js');
let Lift = require('./Lift.js');

let NUMBER_OF_FLOORS = require('../constants/numberOfFloors.js');
let NUMBER_OF_PEOPLE = require('../constants/numberOfPeople.js');


let Building = class {
    constructor() {
        this.person = [];
        for (let numberPeople = 0; numberPeople < NUMBER_OF_PEOPLE; numberPeople++) {
            this.person[numberPeople] = new Person((numberPeople + 1));
        }

        this.floor = [];
        for (let floorNumber = 1; floorNumber <= NUMBER_OF_FLOORS; floorNumber++) {
            this.floor[floorNumber] = new Floor(floorNumber);
        }

        this.lift = new Lift();
    }

    distributionPeopleByFloor() {
        for (let floorNumber = 1; floorNumber <= NUMBER_OF_FLOORS; floorNumber++) {
            for (let numberPeople = 0; numberPeople < this.person.length; numberPeople++) {
                if (this.person[numberPeople].getCurrentFloor() === floorNumber) {
                    let personNumber = this.person[numberPeople].getPersonNumber(),
                        desiredFloorOfPerson = this.person[numberPeople].getDesiredFloor();

                    this.floor[floorNumber].addPerson(personNumber, desiredFloorOfPerson);
                    this.person.splice(numberPeople, 1);
                    numberPeople--;
                }
            }
        }
    }

    infoBuilding() {
        for (let n = 1; n <= NUMBER_OF_FLOORS; n++) {
            this.floor[n].infoFloor();
        }
    }

    liftStart() {
        let floorsEmpty = 0;
        while (floorsEmpty === 0) {
            let currentLiftFloor = this.lift.getCurrentFloor();

            // если лифт на 1м или 9м этажах, то направление меняется
            // на "вверх" и "вниз" соответственно
            if (currentLiftFloor === 1 || currentLiftFloor === NUMBER_OF_FLOORS) {
                this.lift.changeDirection();
            }

            let liftDirection = this.lift.getDirection();

            // выход пассажиров из лифта
            if (this.lift.getNumberSeats() !== 6) {
                for (let i = 0; i < this.lift.getNumberPeopleInLift(); i++) {
                    if (this.lift.getPerson()[i].getDesiredFloor() === currentLiftFloor) {
                        this.floor[currentLiftFloor]
                            .addPerson(this.lift.getPerson()[i].getPersonNumber(),
                                this.lift.getPerson()[i].getDesiredFloor());
                        this.lift.deletePerson(i);
                    }
                }
            }
            // при пустом лифте проверка этажей на наличие людей
            else {
                let numberEmptyFloor = 0;
                while (numberEmptyFloor < NUMBER_OF_FLOORS) {
                    if (this.floor[currentLiftFloor].checkIfFloorEmpty() === 1) {
                        numberEmptyFloor++;
                    }
                    else {
                        break;
                    }
                    if (currentLiftFloor === 1
                        || currentLiftFloor === NUMBER_OF_FLOORS) {
                        liftDirection *= (-1);
                        currentLiftFloor = this.lift.getCurrentFloor();
                    }
                    currentLiftFloor += liftDirection;
                }
                if (numberEmptyFloor === NUMBER_OF_FLOORS) {
                    floorsEmpty = 1;
                    continue;
                }
            }

            //вход пассажиров в лифт
            while (this.lift.getNumberSeats() !== 0) {
                // если лифт едет вверх
                if (liftDirection === 1) {
                    if (this.floor[currentLiftFloor].getNumberPeopleGoUp() !== 0) {
                        this.lift.addPerson(
                            this.floor[currentLiftFloor].getPersonGoUp().getPersonNumber(),
                            this.floor[currentLiftFloor].getPersonGoUp().getDesiredFloor());
                        this.floor[currentLiftFloor].deletePerson(1);
                    }
                    else {
                        break;
                    }
                }
                // если лифт едет вниз
                else {
                    if (this.floor[currentLiftFloor].getNumberPeopleGoDown() !== 0) {
                        this.lift.addPerson(
                            this.floor[currentLiftFloor].getPersonGoDown().getPersonNumber(),
                            this.floor[currentLiftFloor].getPersonGoDown().getDesiredFloor());
                        this.floor[currentLiftFloor].deletePerson(-1);
                    }
                    else {
                        break;
                    }
                }
            }

            // изменение текущего этажа в зависимости от направления
            this.lift.setCurrentFloor(currentLiftFloor + liftDirection);
        }
        console.log('all people on desired floors.')
    }
}

module.exports = Building;