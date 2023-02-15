class Floor {
    constructor(number) {
        this.number_floor = number;
        this.people_on_desired_floor = [];
        this.people_go_down = [];
        this.people_go_up = [];
    }

    add_person(Person) {
        if (Person.get_desired_floor() === this.number_floor) {
            Person.set_current_floor(this.number_floor);
            Person.set_direction(0);
            this.people_on_desired_floor.push(Person);
        }
        else if (Person.get_direction()) {
            this.people_go_up.push(Person);
        }
        else {
            this.people_go_down.push(Person);
        }
    }

    delete_person(index) {

    }
}