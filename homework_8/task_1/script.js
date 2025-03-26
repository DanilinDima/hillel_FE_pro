let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        console.log(this.step);
        return this;
    },
    resetStepsCount() {
        this.step = 0;
        return this;
    }
}

ladder.up().up().down().showStep();



