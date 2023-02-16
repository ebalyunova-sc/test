//-----класс человек
class Person {
    constructor() {
        this.current_floor = Math.round((Math.random()*8)) + 1;
        this.desired_floor = Math.round((Math.random()*8)) + 1;
        // изменение желаемого этажа, если при генерации текущий и желаемый этажи оказались одним этажем
        while (this.desired_floor === this.current_floor) {
            this.desired_floor = Math.round((Math.random()*8)) + 1;
        }
        // direction === 1 - движение вверх, -1 - движение вниз, 0 - человек на нужном этаже
        if (this.current_floor < this.desired_floor) {
            this.direction = 1;
        }
        else {
            this.direction = -1;
        }
    }

    str_person_info() {
        let info ;
        info = 'current floor - ' + this.current_floor + '\ndesired floor - ' + this.desired_floor + '\n';
        return info
    }

    set_current_floor(floor) {
        this.current_floor = floor;
    }

    set_direction(direction) {
        this.direction = direction;
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

//-----класс лифт
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

//-----класс здание
class Building {
    constructor() {
        this.person = [];
        for (let i = 0; i < 100; i++) {
            this.person[i] = new Person();
            console.log(this.person[i].str_person_info());
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
                    this.floor[i].add_person(this.person[i]);
                    this.person.splice(i, 1);
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
}

//----- вызов классов и работа программы

let building = new Building();



//building.distribution_people_by_floor();

//building.info_building();