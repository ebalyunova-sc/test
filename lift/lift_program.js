//-----класс человек
class Person {
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

    str_person_info() {
        return 'number of person - ' + this.number_person + '\ncurrent floor - ' + this.current_floor + '\ndesired floor - ' + this.desired_floor + '\n';
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
}

//-----класс этаж
class Floor {
    constructor(number) {
        this.number_floor = number;
        this.people_on_desired_floor = [];
        this.people_go_down = [];
        this.people_go_up = [];
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

//-----класс лифт
class Lift {
    constructor() {
        this.number_seats = 6;
        this.people = [];
        this.direction = 1;  // 1 - движение вверх, -1 - движение вниз
        this.current_floor = 1;
    }

    get_number_seats() {
        return this.number_seats;
    }

    get_direction() {
        return this.direction;
    }

    add_person(number_person, desired_floor) {
        let person = new Person(number_person, this.current_floor, desired_floor);
        this.people.push(person);
        this.number_seats--;
    }

    delete_person(index) {
        this.people.splice(index, 1);
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

//-----класс здание
class Building {
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
            console.log(n);
            for (let i = 0; i < this.floor[n].people_on_desired_floor.length; i++) {
                console.log(this.floor[n].people_on_desired_floor[i].str_person_info());
            }
            console.log('---')
            for (let i = 0; i < this.floor[n].people_go_up.length; i++) {
                console.log(this.floor[n].people_go_up[i].str_person_info());
            }
            console.log('---')
            for (let i = 0; i < this.floor[n].people_go_down.length; i++) {
                console.log(this.floor[n].people_go_down[i].str_person_info());
            }
        }
    }

    lift_start() {

    }
}


//----- вызов классов и работа программы
let building = new Building();
building.distribution_people_by_floor();
building.info_building();