let Person = require('./Person.js')

let Floor = class {
    constructor(number) {
        this.number_floor = number;
        this.people_on_desired_floor = [];
        this.people_go_down = [];
        this.people_go_up = [];
    }

    get_people_on_desired_floor() {
        return this.people_on_desired_floor;
    }

    get_people_go_down() {
        return this.people_go_down;
    }

    get_people_go_up() {
        return this.people_go_up;
    }

    get_number_people_on_desired_floor() {
        return this.people_on_desired_floor.length;
    }

    get_number_people_go_down() {
        return this.people_go_down.length;
    }

    get_number_people_go_up() {
        return this.people_go_up.length;
    }

    add_person(number_person, desired_floor) {
        let person = new Person(number_person, this.number_floor, desired_floor);
        if (desired_floor === this.number_floor) {
            person.set_current_floor(this.number_floor);
            this.people_on_desired_floor.push(person);
        }
        else if (person.get_direction() === 1) {
            this.people_go_up.push(person);
        }
        else {
            this.people_go_down.push(person);
        }
    }

    delete_person(direction) {
        if (direction === 1) {
            this.people_go_up.shift();
        }
        else {
            this.people_go_down.shift();
        }
    }
}

module.exports = Floor;