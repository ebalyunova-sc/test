class Person {
    constructor() {
        this.current_floor = Math.floor(((Math.random() % 9) + 1));
        this.desired_floor = Math.floor(((Math.random() % 9) + 1));
        // изменение желаемого этажа, если при генерации текущий и желаемый этажи оказались одним этажем
        while (this.desired_floor === this.current_floor) {
            this.desired_floor = Math.floor(((Math.random() % 9) + 1));
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