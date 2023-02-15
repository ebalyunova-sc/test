class Building {
    constructor() {
        this.person = [];
        for (let i = 0; i < 100; i++) {
            this.person[i] = generation_person();
        }

        this.floor = [];
        for (let i = 1; i <= 9; i++) {
            this.floor[i] = generation_floor(i);
        }

        this.lift = generation_lift();
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
}