let Person = require('./Person.js')

let Lift = class {
    constructor() {
        this.number_seats = 6;
        this.person = [];
        this.direction = 1;  // 1 - движение вверх, -1 - движение вниз
        this.current_floor = 1;
    }

    set_current_floor(current_floor) {
        this.current_floor = current_floor;
    }

    get_number_seats() {
        return this.number_seats;
    }

    get_person() {
        return this.person;
    }

    get_direction() {
        return this.direction;
    }

    get_current_floor() {
        return this.current_floor;
    }

    get_number_people_in_lift() {
        return this.person.length;
    }

    add_person(number_person, desired_floor) {
        let person = new Person(number_person, this.current_floor, desired_floor);
        this.person.push(person);
        this.number_seats--;
    }

    delete_person(index) {
        this.person.splice(index, 1);
        this.number_seats++;
    }

    change_direction() {
        if (this.current_floor === 1 && this.direction === -1) {
            this.direction = 1;
        }
        else if (this.current_floor === 9 && this.direction === 1) {
            this.direction = -1;
        }
    }
}

module.exports = Lift;