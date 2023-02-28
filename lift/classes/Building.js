let Person = require('./Person.js')
let Floor = require('./Floor.js')
let Lift = require('./Lift.js')

let Building = class {
    constructor() {
        this.person = [];
        for (let i = 0; i < 100; i++) {
            this.person[i] = new Person((i + 1));
        }

        this.floor = [];
        for (let i = 1; i <= 9; i++) {
            this.floor[i] = new Floor(i);
        }

        this.lift = new Lift();
    }

    distributionPeopleByFloor() {
        for (let n = 1; n <= 9; n++) {
            for (let i = 0; i < this.person.length; i++) {
                if (this.person[i].getCurrentFloor() === n) {
                    this.floor[n].addPerson(this.person[i].getPersonNumber(), this.person[i].getDesiredFloor());
                    this.person.splice(i, 1);
                    i--;
                }
            }
        }
    }

    infoBuilding() {
        for (let n = 1; n <= 9; n++) {
            console.log('\n' + n);
            for (let i = 0; i < this.floor[n].getNumberPeopleOnDesiredFloor(); i++) {
                console.log(this.floor[n].getPeopleOnDesiredFloor()[i].getPersonInfo());
            }
            if (this.floor[n].getNumberPeopleOnDesiredFloor() !== 0) {
                console.log('---')
            }
            for (let i = 0; i < this.floor[n].getNumberPeopleGoUp(); i++) {
                console.log(this.floor[n].getPeopleGoUp()[i].getPersonInfo());
            }
            if (this.floor[n].getNumberPeopleGoUp() !== 0) {
                console.log('---')
            }
            for (let i = 0; i < this.floor[n].getNumberPeopleGoDown(); i++) {
                console.log(this.floor[n].getPeopleGoDown()[i].getPersonInfo());
            }
        }
    }

    liftStart() {
        let floorsEmpty = 0;
        while (floorsEmpty === 0) {
            // если лифт на 1м или 9м этажах, то направление меняется на "вверх" и "вниз" соответственно
            this.lift.changeDirection();
            // выход пассажиров из лифта
            if (this.lift.getNumberSeats() !== 6) {
                for (let i = 0; i < this.lift.getNumberPeopleInLift(); i++) {
                    if (this.lift.getPerson()[i].getDesiredFloor() === this.lift.getCurrentFloor()) {
                        this.floor[this.lift.getCurrentFloor()]
                            .addPerson(this.lift.getPerson()[i].getPersonNumber(), this.lift.getPerson()[i].getDesiredFloor());
                        this.lift.deletePerson(i);
                    }
                }
            }
            // при пустом лифте проверка этажей на наличие людей
            else {
                let numberEmptyFloor = 0;
                while (numberEmptyFloor < 14) {
                    this.lift.changeDirection();
                    if (this.lift.getDirection() === 1) {
                        if (this.floor[this.lift.getCurrentFloor()].getNumberPeopleGoUp() === 0) {
                            numberEmptyFloor++;
                        }
                        else {
                            break;
                        }
                    }
                    else {
                        if (this.floor[this.lift.getCurrentFloor()].getNumberPeopleGoDown() === 0) {
                            numberEmptyFloor++;
                        }
                        else {
                            break;
                        }
                    }
                    this.lift.setCurrentFloor(this.lift.getCurrentFloor() + this.lift.getDirection());
                }
                if (numberEmptyFloor === 14) {
                    floorsEmpty = 1;
                    continue;
                }
            }
            //вход пассажиров в лифт
            while (this.lift.getNumberSeats() !== 0) {
                // если лифт едет вверх
                if ((this.lift.getDirection() === 1)) {
                    if (this.floor[this.lift.getCurrentFloor()].getNumberPeopleGoUp() !== 0) {
                        this.lift.addPerson(this.floor[this.lift.getCurrentFloor()].getPeopleGoUp()[0].getPersonNumber(), this.floor[this.lift.getCurrentFloor()].getPeopleGoUp()[0].getDesiredFloor());
                        this.floor[this.lift.getCurrentFloor()].deletePerson(1);
                    }
                    else {
                        break;
                    }
                }
                // если лифт едет вниз
                else {
                    if (this.floor[this.lift.getCurrentFloor()].getNumberPeopleGoDown() !== 0) {
                        this.lift.addPerson(this.floor[this.lift.getCurrentFloor()].getPeopleGoDown()[0].getPersonNumber(), this.floor[this.lift.getCurrentFloor()].getPeopleGoDown()[0].getDesiredFloor());
                        this.floor[this.lift.getCurrentFloor()].deletePerson(-1);
                    }
                    else {
                        break;
                    }
                }
            }
            // изменение текущего этажа в соответствии с направлением
            this.lift.setCurrentFloor(this.lift.getCurrentFloor() + this.lift.getDirection());
        }
        console.log('all people on desired floors.')
    }
}

module.exports = Building;