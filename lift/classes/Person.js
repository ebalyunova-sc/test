let Person = class {
    constructor(number_person, current_floor = 0, desired_floor = 0) {
        this.number_person = number_person;

        if (current_floor === 0) {
            this.current_floor = Math.round((Math.random()*8)) + 1;
        }
        else {
            this.current_floor = current_floor;
        }

        if (desired_floor === 0) {
            this.desired_floor = Math.round((Math.random()*8)) + 1;
            // изменение желаемого этажа, если при генерации текущий и желаемый этажи оказались одним этажем
            while (this.desired_floor === this.current_floor) {
                this.desired_floor = Math.round((Math.random()*8)) + 1;
            }
        }
        else {
            this.desired_floor = desired_floor;
        }
        // direction === 1 - движение вверх, -1 - движение вниз
        if (this.current_floor < this.desired_floor) {
            this.direction = 1;
        }
        else {
            this.direction = -1;
        }
    }

    set_current_floor(floor) {
        this.current_floor = floor;
    }

    get_number_person() {
        return this.number_person;
    }

    get_current_floor() {
        return this.current_floor;
    }

    get_desired_floor() {
        return this.desired_floor;
    }

    get_direction() {
        return this.direction;
    }

    get_person_info() {
        return 'number of person - ' + this.number_person + '\n\tdesired floor - ' + this.desired_floor;
    }
}

module.exports = Person;