class Apple {
    #weight = 10;

    getWeight() {
        return this.#weight;
    }

    decrease() {
        if (this.#weight > 0) {
            this.#weight -= 1;
        }
    }

    isEmpty() {
        return this.#weight <= 0;
    }
}

class Human {
    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }

    function say(words) {
        console.log(`${this.name} says: "${words}"`);
    }

    function eat(apple) {
        if (!apple.isEmpty()) {
            apple.decrease();
            this.weight += 1;
            console.log(`${this.name} ate a piece of apple 🍎`);
        } else {
            console.log(`${this.name} wanted to eat, but the apple is finished.`);
        }
    }

    function checkApple(apple) {
        console.log(`Apple's remaining weight: ${apple.getWeight()}`);
    }

    getInfo() {
        return {
            name: this.name,
            gender: this.gender,
            weight: this.weight
        };
    }

    const apple = new Apple();
    const adam = new Human("Adam", "Male", 60);
    const eva = new Human("Eva", "Female", 50);

    while (!apple.isEmpty()){
    adam.eat(apple);
    adam.checkApple(apple);
    eva.eat(apple);
    eva.checkApple(apple);}


console.log("\n🌟 Final Results:");
console.log(adam.getInfo());
console.log(eva.getInfo());

}


