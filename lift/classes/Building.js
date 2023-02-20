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

    distribution_people_by_floor() {
        for (let n = 1; n <= 9; n++) {
            for (let i = 0; i < this.person.length; i++) {
                if (this.person[i].get_current_floor() === n) {
                    this.floor[n].add_person(this.person[i].get_number_person(), this.person[i].get_desired_floor());
                    this.person.splice(i, 1);
                    i--;
                }
            }
        }
    }

    info_building() {
        for (let n = 1; n <= 9; n++) {
            console.log('\n' + n);
            for (let i = 0; i < this.floor[n].get_number_people_on_desired_floor(); i++) {
                console.log(this.floor[n].get_people_on_desired_floor()[i].get_person_info());
            }
            if (this.floor[n].get_number_people_on_desired_floor() !== 0) {
                console.log('---')
            }
            for (let i = 0; i < this.floor[n].get_number_people_go_up(); i++) {
                console.log(this.floor[n].get_people_go_up()[i].get_person_info());
            }
            if (this.floor[n].get_number_people_go_up() !== 0) {
                console.log('---')
            }
            for (let i = 0; i < this.floor[n].get_number_people_go_down(); i++) {
                console.log(this.floor[n].get_people_go_down()[i].get_person_info());
            }
        }
    }

    lift_start() {
        let floors_empty = 0;
        while (floors_empty === 0) {
            // если лифт на 1м или 9м этажах, то направление меняется на "вверх" и "вниз" соответственно
            this.lift.change_direction();
            // выход пассажиров из лифта
            if (this.lift.get_number_seats() !== 6) {
                for (let i = 0; i < this.lift.get_number_people_in_lift(); i++) {
                    if (this.lift.get_person()[i].get_desired_floor() === this.lift.get_current_floor()) {
                        this.floor[this.lift.get_current_floor()].add_person(this.lift.get_person()[i].get_number_person(), this.lift.get_person()[i].get_desired_floor());
                        this.lift.delete_person(i);
                    }
                }
            }
            // при пустом лифте проверка этажей на наличие людей
            else {
                let number_empty_floor = 0;
                while (number_empty_floor < 14) {
                    this.lift.change_direction();
                    if (this.lift.get_direction() === 1) {
                        if (this.floor[this.lift.get_current_floor()].get_number_people_go_up() === 0) {
                            number_empty_floor++;
                        }
                        else {
                            break;
                        }
                    }
                    else {
                        if (this.floor[this.lift.get_current_floor()].get_number_people_go_down() === 0) {
                            number_empty_floor++;
                        }
                        else {
                            break;
                        }
                    }
                    this.lift.set_current_floor(this.lift.get_current_floor() + this.lift.get_direction());
                }
                if (number_empty_floor === 14) {
                    floors_empty = 1;
                    continue;
                }
            }
            //вход пассажиров в лифт
            while (this.lift.get_number_seats() !== 0) {
                // если лифт едет вверх
                if ((this.lift.get_direction() === 1)) {
                    if (this.floor[this.lift.get_current_floor()].get_number_people_go_up() !== 0) {
                        this.lift.add_person(this.floor[this.lift.get_current_floor()].get_people_go_up()[0].get_number_person(), this.floor[this.lift.get_current_floor()].get_people_go_up()[0].get_desired_floor());
                        this.floor[this.lift.get_current_floor()].delete_person(1);
                    }
                    else {
                        break;
                    }
                }
                // если лифт едет вниз
                else {
                    if (this.floor[this.lift.get_current_floor()].get_number_people_go_down() !== 0) {
                        this.lift.add_person(this.floor[this.lift.get_current_floor()].get_people_go_down()[0].get_number_person(), this.floor[this.lift.get_current_floor()].get_people_go_down()[0].get_desired_floor());
                        this.floor[this.lift.get_current_floor()].delete_person(-1);
                    }
                    else {
                        break;
                    }
                }
            }
            // изменение текущего этажа в соответствии с направлением
            this.lift.set_current_floor(this.lift.get_current_floor() + this.lift.get_direction());
        }
        console.log('all people on desired floors.')
    }
}

module.exports = Building;