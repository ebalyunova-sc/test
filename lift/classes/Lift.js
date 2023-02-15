class Lift {
    constructor() {
        this.number_seats = 6;
        this.person = [];
        this.direction = 1;  // 1 - движение вверх, -1 - движение вниз
        this.current_floor = 1;
    }

    get_number_seats() {
        return this.number_seats;
    }

    add_person(Person) {
        if (this.number_seats > 0) {
            this.person.push(Person);
            this.number_seats--;
            return 1;
        }
        else {
            return 0;
        }
    }

    delete_person(index) {
        this.person.splice(index, 1);
        this.number_seats++;
    }

    check_direction() {
        return this.direction;
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